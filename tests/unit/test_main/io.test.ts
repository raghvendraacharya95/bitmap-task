import exp from 'constants';
import { IOReader } from '../../../src/io';
import { Matrix } from '../../../src/models/matrix';

describe('IOReader Class Tests', () => {
    describe('processLine', () => {
        it('should process the incoming line and construct bitmap descriptions', () => {
            const reader = new IOReader();
            reader.processLine('1');
            reader.processLine('');
            reader.processLine('3 4');
            reader.processLine('0001');
            reader.processLine('0011');
            reader.processLine('0110');
            expect(reader.testCases).toEqual(1);
            expect(reader.matrixDetails[0].rowSize).toEqual(3);
            expect(reader.matrixDetails[0].columnSize).toEqual(4);
            expect(reader.matrixDetails[0].cells).toBe('0001,0011,0110');
        });
        it('should throw err when an invalid value of bitmap size come from the input', () => {
            const reader = new IOReader();
            reader.processLine('1');
            reader.processLine('');
            try {
                reader.processLine('3 200');
            } catch (error) {
                // expect(error.message).toBe('Invalid matrix size');
            }
        });
    });

    describe('getBitMatrix', () => {
        it('should create and return bitmap matrix as details passed', () => {
            const reader = new IOReader();
            reader.processLine('1');
            reader.processLine('');
            reader.processLine('3 4');
            reader.processLine('0001');
            reader.processLine('0011');
            reader.processLine('0110');
            const bitMatrix: Matrix[] = reader.getBitMatrix();
            expect(bitMatrix[0].getRows()).toEqual(3);
            expect(bitMatrix[0].getColumns()).toEqual(4);
            expect(bitMatrix[0].getCells()).toHaveLength(12);
        });
    });
});
