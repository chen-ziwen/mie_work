<template>
    <!-- <img src="/assets/common/ListWidget/neon.png" width="256" height="192"> -->
    <div id="box">
        <div class="yasuo"></div>
        <div class="buttle">
            <span>
                6666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666
            </span>
        </div>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
#box {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    background: url(https://cdn.boop.pl/uploads/2020/01/inferno-rift-landscape-transformation-lol-season-10-rise-of-the-elements.jpeg);
    // background: linear-gradient(#fff, #000);
    background-size: cover;

    .yasuo {
        position: absolute;
        top: 40px;
        left: 40px;
        width: 120px;
        height: 120px;
        background: url(https://s3.ax1x.com/2021/02/06/ytA3T0.png);
        background-size: cover;
        animation: move 10s infinite alternate;
    }

    .buttle {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: lightblue;
        // background: radial-gradient(circle at 100px 100px, transparent 60px, #fff 80px, #fff 100%);
        mask: radial-gradient(circle at 100px 100px, transparent 60px, #fff 100px, #fff 100%);
        -webkit-mask: radial-gradient(circle at 100px 100px, transparent 100px, #fff 100px, #fff 100%);
        animation: mask 10s infinite alternate;

        >span {
            position: absolute;
            top: 50px;
        }
    }
}

@keyframes move {
    100% {
        transform: translate(calc(85vw), 0);
    }
}

@keyframes mask {
    100% {
        -webkit-mask-position: 85vw 0;
    }
}
</style>