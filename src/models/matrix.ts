import { Cell } from "./cell";

/**
 * Class representing a matrix {Bitmap}.
 * @class
 */
export class Matrix {
    private rows: number;
    private columns: number;
    private cells: Cell[];

  /**
   * @constructor Create a matrix
   */
    constructor(rows: number, columns: number, cells: Cell[]) {
        this.rows = rows;
        this.columns = columns;
        this.cells = cells;
    };

    public getRows(): number { return this.rows; };

    public getColumns(): number { return this.columns; };

    public getCells(): Cell[] { return this.cells; };

    public setCellColor(cell: Cell, color: number): void {
        const index = this.getCellIndex(cell);
        if (index != -1) {
            this.cells[index].setColor(color);
        }
    };

    private getCellIndex(cell: Cell){
        return this.cells.findIndex((p) => p.getXCoordinate() === cell.getXCoordinate() && p.getYCoordinate() === cell.getYCoordinate());
    };

};