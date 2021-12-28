/**
 * Class representing a cell.
 * @class
 */
export class Cell {
    private x: number;
    private y: number;
    private color: number;

    /**
   * Create a Cell.
   * @param {number} x - coordinate
   * @param {number} y - coordinate
   * @param {number} color - of a cell
   */
    constructor(x: number, y: number, color: number) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    public getXCoordinate(): number { return this.x; }

    public getYCoordinate(): number { return this.y; }

    public getColor(): number { return this.color; }

    public setColor(color: number) { this.color = color; }
};