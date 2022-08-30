import { v4 as uuidv4 } from "uuid";
import { DiceClassName } from "@/utils/dice/diceConfig";
import Dice from "./Dice";

export default class DiceBox {
    constructor(options) {
        const { diceNum = 1, polyhedronNum = 6, diceCountList = [1, 2, 3, 4, 5, 6] } = options;
        this._id = uuidv4();
        this._type = DiceClassName.DiceBox;
        this.diceNum = diceNum;
        this.polyhedronNum = polyhedronNum;
        this.diceCountList = diceCountList;
        this.diceBox = [];
        this.diceBoxCountList = [];
        this.currentCount = null;
        this.init();
    }

    get id() {
        return this._id;
    }

    init() {
        let i = 0;
        while (i < this.diceNum) {
            this.diceBox.push(new Dice(this.polyhedronNum, this.diceCountList));
            i += 1;
        }
    }

    rollAll() {
        this.currentCount = 0;
        this.diceBoxCountList = [];
        this.diceBox.forEach(dice => {
            const diceCount = dice.roll();
            this.diceBoxCountList.push(diceCount);
            this.currentCount += diceCount;
        });
        return {
            currentCount: this.currentCount,
            diceBoxCountList: this.diceBoxCountList,
        };
        // return JSON.stringify([this.currentCount, this.diceBoxCountList]);
    }
}
