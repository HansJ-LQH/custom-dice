import { v4 as uuidv4 } from "uuid";
import { DiceClassName } from "@/utils/dice/diceConfig";

export default class Dice {
    constructor(polyhedronNum = 6, countList = [1, 2, 3, 4, 5, 6]) {
        this._id = uuidv4();
        this._type = DiceClassName.Dice;
        this.diceNum = polyhedronNum; // 骰子面数
        this.countList = countList; // 各面的点数
        this.currentCount = null;
        this.init();
    }

    init() {
        if (this.diceNum !== this.countList.length) throw new Error("初始化失败");
    }

    roll() {
        const baseNum = 1 / this.diceNum;
        const index = Math.floor(Math.random() / baseNum);
        this.currentCount = this.countList[index];
        return this.currentCount;
    }
}
