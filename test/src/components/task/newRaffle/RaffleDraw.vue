
<template>
    <div class="raffle-draw">
        <div class="card-back">

        </div>
        <div class="base-message">
            <Right></Right>
        </div>
    </div>
</template>
<script lang='ts' setup>
import Right from '../newRaffle/Right.vue';

</script>
<style lang='scss' scoped>
.raffle-draw {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;

    .card-back {
        position: relative;
        background: url(/assets/images/newraffle/raffleback.png) no-repeat;
        background-size: 841px 659px;
        width: 841px;
        height: 659px;
        // background-size: 890px 680px;
        // width: 890px;
        // height: 680px;
    }
}
</style>