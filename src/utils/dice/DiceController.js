import Dice from "./Dice";
import DiceBox from "./DiceBox";

class DiceController {
    constructor() {
        window.diceController = this;
        this.diceBoxList = new Map();
    }

    /**
     * 创建一个骰子Box
     * @param {*} options 
     * @returns 
     * @example
     * const options = {
            diceNum: 1,
            polyhedronNum: 6,
            diceCountList: [1, 2, 3, 4, 5, 6],
        };
     */
    createDiceBox(options) {
        const diceBox = new DiceBox(options);
        this.diceBoxList.set(diceBox.id, diceBox);
        return diceBox;
    }
}

export default new DiceController();
