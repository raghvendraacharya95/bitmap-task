import { Cell } from '../../../src/models/cell';
import assert from 'assert';

describe('Cell Class Tests', () => {
    const cell: Cell = new Cell(0, 1, 0);
    describe('getXCoordinate', () => {
        it('should return the x-axis index of the cell', () => {
            expect(cell.getXCoordinate()).toEqual(0);
            // assert.equal(cell.getXCoordinate, 0);
        });
    });
    describe('getColumnIndex', () => {
        it('should return y-axis index of the cell', () => {
            expect(cell.getYCoordinate()).toEqual(1);
            // assert.equal(cell.getYCoordinate, 1);
        });
    });
    describe('getColor', () => {
        it('should return the color value of the cell', () => {
            expect(cell.getColor()).toEqual(0);
            // assert.equal(cell.getColor,0)
        });
    });
});
