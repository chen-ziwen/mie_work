<template>
    <img class="inset" src="./pittsburgh.jpg" />
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
.inset {
    // 可以设置多个点，点与点之间依次连接。
    // 每个点有两个值，第一个值代表x轴，第二个值代表y轴。
    // 下面这个为梯形
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}
</style>