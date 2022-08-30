<!-- 自定义骰子页面 -->
<template>
    <div class="custom-dice">
        <div class="dice-configure" v-if="!currentConfig">
            <div class="dice-list" v-for="(item, index) of diceConfig" :key="item.name">
                <DiceList :diceBoxCountList="item.diceCountList"></DiceList>
                <div class="tool">
                    <div>
                        <span>骰子个数</span><br />
                        <el-input-number v-model="diceNum" @change="handleDiceNumChange" :min="1" size="mini" label="骰子点数"></el-input-number>
                    </div>
                    <el-button type="primary" @click="choiceConfig(index)" size="mini">选它</el-button>
                </div>
            </div>
        </div>
        <div class="info" v-if="currentConfig">
            <DiceList :diceBoxCountList="diceBoxCountList"></DiceList>
            <div class="current-count">当前点数：{{ currentCount || "?" }}</div>
        </div>
        <div class="control" v-if="currentConfig">
            <el-button type="primary" @click="rollDiceBox">roll</el-button>
        </div>
    </div>
</template>
<script>
import diceController from "@/utils/dice/DiceController.js";
import DiceList from "@/components/DiceList";

export default {
    name: "Home",
    data() {
        return {
            diceNum: 1,
            diceNumList: [],
            diceConfig: [
                {
                    name: "default",
                    diceCountList: [1, 2, 3, 4, 5, 6],
                },
                {
                    name: "小黑屋",
                    diceCountList: [0, 0, 1, 1, 2, 2],
                },
            ],
            currentConfig: null,
            diceBox: null,
            currentCount: null,
            diceBoxCountList: ["问号"],
        };
    },

    components: { DiceList },
    watch: {
        diceNum() {
            this.diceBoxCountList = new Array(this.diceNum).fill("问号");
        },
    },
    methods: {
        handleDiceNumChange(params) {
            console.log("HJJ params", params);
        },
        createDiceBox(config) {
            this.diceBox = diceController.createDiceBox({ ...config, diceNum: this.diceNum });
        },
        rollDiceBox() {
            const { currentCount, diceBoxCountList } = this.diceBox.rollAll();
            this.currentCount = currentCount;
            this.diceBoxCountList = diceBoxCountList;
        },
        choiceConfig(index) {
            this.currentConfig = this.diceConfig[index];
            this.createDiceBox(this.currentConfig);
        },
    },
};
</script>
<style lang="scss" scoped>
.custom-dice {
    padding: 10% 5%;
    .dice-configure {
        .dice-list {
            margin: 10px 0;
            padding: 10px 10px;
            border: 1px dashed #8cdcdf;
            border-radius: 10px;
            .dice-roll-list {
                margin: 10px 0;
            }
            .tool {
                display: flex;
                justify-content: space-around;
            }
        }
    }
    .info {
        .current-count {
            padding-top: 40px;
            font-size: 24px;
        }
    }
    .control {
        width: 100vw;
        position: fixed;
        bottom: 5%;
        display: flex;
        justify-content: space-around;
    }
}
</style>
