import { Matrix } from '../../src/models/matrix';
import { Cell } from '../../src/models/cell';

export class Helper {
    static initializeMatrix(): Matrix {
        const cells: Cell[] = [new Cell(0, 0, 0), new Cell(0, 1, 0), new Cell(1, 0, 0), new Cell(1, 1, 1)];
        const bitMatrix: Matrix = new Matrix(2, 2, cells);
    return bitMatrix;
  }
}
