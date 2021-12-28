import readline from 'readline';
import { IOReader } from './io';
import { DistanceCalculator } from './util/distanceCalculator';

/**
 * Main function that run the application
 * Read input and create a matrix(map)
 * for each cell it will calculate the nearest white cell.
 */

async function run(): Promise<void> {
    const line = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    const reader = new IOReader();

    line.on('line', (line) => {
        try {
            reader.processLine(line.trim());
        } catch (error) {
            throw new Error(`something went wrong in parsing: ${error}`);
        }
    });

    line.on('close', () => {
        const bitmaps = reader.getBitMatrix();
        bitmaps.forEach((bitmap) => {
            const cells = bitmap.getCells();
            for (let i = 0; i < bitmap.getRows(); i++) {
                const outputLine = cells
                    .filter((cell) => cell.getXCoordinate() === i)
                    .map((cell) => {
                        return DistanceCalculator.calculateDistanceToTheClosetWhiteCell(bitmap, cell);
                    })
                    .join(' ');
                process.stdout.write(outputLine + '\n');
            }
            process.stdout.write('\n');
        });
        process.stdout.write('\n');
    });

}
(async () => {
    await run();
})();