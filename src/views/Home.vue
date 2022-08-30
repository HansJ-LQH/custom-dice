<template>
    <div class="home">
        <router-link to="/custom-dice">
            <el-button type="primary">自定义骰子</el-button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {},
};
</script>

<style scoped>
.home {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
