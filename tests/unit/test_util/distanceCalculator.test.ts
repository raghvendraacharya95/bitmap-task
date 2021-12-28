import { DistanceCalculator } from '../../../src/util/distanceCalculator';
import { Matrix } from '../../../src/models/matrix';
import { Cell } from '../../../src/models/cell';
import { Helper } from '../../unit/test_helper';
const assert = require('assert');

describe('DistanceCalculator Class Tests', () => {
    const bitMatrix: Matrix = Helper.initializeMatrix();
    const blackCell: Cell = new Cell(0, 0, 0);
    const whiteCell: Cell = new Cell(1, 1, 1);
    describe('calculateDistanceToTheNearestWhite', () => {
        it('should return the distance of closest white cell from a given cell ', () => {
            expect(DistanceCalculator.calculateDistanceToTheClosetWhiteCell(bitMatrix, blackCell)).toEqual(2);
            // assert.equals(DistanceCalculator.calculateDistanceToTheClosetWhiteCell(bitMatrix, blackCell), 2);
        });
        it('should return 0 if the given cell is already white', () => {
            expect(DistanceCalculator.calculateDistanceToTheClosetWhiteCell(bitMatrix, whiteCell)).toEqual(0);
            // assert.equals(DistanceCalculator.calculateDistanceToTheClosetWhiteCell(bitMatrix, whiteCell),0);
        });
    });
});
