import { Cell } from "../models/cell";
import { Matrix } from "../models/matrix";
import { Constants } from '../constants';

/**
 * DistanceCalculator class
 * @class
 * */
export class DistanceCalculator {
    /*
    *
    * Returns the distance of nearest white cell from a cell that is in a given matrix.
    */
    public static calculateDistanceToTheClosetWhiteCell(matrix: Matrix, cell: Cell): number {
        if (cell.getColor() === Constants.CELL_COLORS_WHITE) {
            return 0;
        }
        return matrix
            .getCells()
            .filter((cell) => cell.getColor() === Constants.CELL_COLORS_WHITE)
            .reduce((nearestDistance: number, currentCell: Cell) => {
                const newDistance: number =
                    Math.abs(currentCell.getXCoordinate() - cell.getXCoordinate()) 
                  + Math.abs(currentCell.getYCoordinate() - cell.getYCoordinate());
                nearestDistance = Math.min(nearestDistance, newDistance);
                return nearestDistance;
            }, Math.max(matrix.getRows(), matrix.getColumns()));
    }

};