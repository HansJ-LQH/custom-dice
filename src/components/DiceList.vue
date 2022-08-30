<!-- DiceList -->
<template>
    <div class="dice-roll-list">
        <span class="dice" v-for="(item, index) of diceBoxCountList" :key="index">
            <img :src="`images/点数-${item}.png`" />
        </span>
    </div>
</template>

<script>
export default {
    props: {
        diceBoxCountList: {
            type: Array,
            default: [1, 2, 3, 4, 5, 6],
        },
    },
    data() {
        return {};
    },

    components: {},

    methods: {},
};
</script>
<style lang="scss" scoped>
.dice-roll-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .dice {
        margin: 4vw 2vw;
        img {
            width: 10vw;
            height: 10vw;
        }
    }
}
</style>
