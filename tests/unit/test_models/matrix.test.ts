import { Matrix } from '../../../src/models/matrix';
import { Helper } from '../../unit/test_helper';

describe('Bitmap Class Tests', () => {
    const bitMatrix: Matrix = Helper.initializeMatrix();
    describe('getRows', () => {
        it('should return row size of the matrix', () => {
            expect(bitMatrix.getRows()).toEqual(2);
        });
    });
    describe('getColumns', () => {
        it('should return column size of the matrix', () => {
            expect(bitMatrix.getColumns()).toEqual(2);
        });
    });
    describe('getCells', () => {
        it('should return cell size of the matrix', () => {
            expect(bitMatrix.getCells()).toHaveLength(4);
        });
    });
});
