import { Constants } from './constants';
import { Cell } from './models/cell';
import { Matrix } from './models/matrix';

// var _ = require('lodash');

interface MatrixDetails {
    rowSize: number;
    columnSize: number;
    cells: string;
}

export class IOReader {
    public matrixDetails: Array<MatrixDetails>;
    public testCases: number | undefined;

    constructor() {
        this.matrixDetails = [];
    }

    public processLine(line: string) : null {
        if (!this.testCases) {
            this.testCases = Number(line);
            return null;
        }

        if (line === '') {
            return null;
        }
        
        if (line.includes(' ')) {
            const [rowSize, columnSize] = line.split(' ');
            if (
                !(Number(rowSize) >= Constants.MATRIX_SIZE_MIN_VALUE && Number(rowSize) <= Constants.MATRIX_SIZE_MAX_VALUE) ||
                !(Number(columnSize) >= Constants.MATRIX_SIZE_MIN_VALUE && Number(columnSize) <= Constants.MATRIX_SIZE_MAX_VALUE)
            ) {
                throw new Error('Invalid matrix size');
            }
            const newMatrixDetails: MatrixDetails = {
                rowSize: Number(rowSize),
                columnSize: Number(columnSize),
                cells: ''
            };
            this.matrixDetails.push(newMatrixDetails);
            return null;
        } else {
            if (this.matrixDetails[this.matrixDetails.length - 1].cells === '') {
                this.matrixDetails[this.matrixDetails.length - 1].cells = line;
            } else {
                this.matrixDetails[this.matrixDetails.length - 1].cells += ',' + line;
            }
            return null;
        }

    }

    public getBitMatrix(): Matrix[] {
        const bitMatrix: Matrix[] = [];
        this.matrixDetails.forEach((bitmapDescription: MatrixDetails) => {
            const { rowSize: rowSize, columnSize, cells: strCells } = bitmapDescription;
            const cells: Cell[] = [];
            const lines = strCells.split(',');
            for (let rowIndex = 0; rowIndex < rowSize; rowIndex++) {
                for (let columnIndex = 0; columnIndex < columnSize; columnIndex++) {
                    const newCell = new Cell(rowIndex, columnIndex, Number(lines[rowIndex].charAt(columnIndex)));
                    cells.push(newCell);
                }
            }
            bitMatrix.push(new Matrix(rowSize, columnSize, cells));
        });
        return bitMatrix;
    };
}