<template>
    <div class="rank ">
        <div class="rank-box">
            <slot></slot>
        </div>
    </div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@mixin _flex ($just, $align) {
    display: flex;
    justify-content: $just;
    align-items: $align;
}

.rank {
    background: url(/assets/image/rank/rank.png) no-repeat;
    background-size: 542px 724px;
    width: 542px;
    height: 724px;
    @include _flex(center, center);
    animation: hidden 3s linear;

    &-box {
        margin-top: 90px;
        width: 100%;
        height: 542px;
        overflow: hidden;
        flex-direction: column;
        @include _flex(flex-start, center);
    }
}

@keyframes hidden {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>