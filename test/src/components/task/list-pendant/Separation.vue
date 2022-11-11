<template>
    <div class="list-widget">
        <div class="border style" :style="realHeight">
            <span class="head-text">
                {{ head }}
            </span>
        </div>
        <div class="content-text">
            <RowListLi :theme="theme" v-for="(text, index) in data" :key="index" :width="200" :height="70">
                {{ text }}
            </RowListLi>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { computed } from 'vue';
import RowListLi from './RowListLi.vue';

interface ListWidgetProps {
    data: string[],
    head: string,
    theme: string,
    mask?: boolean,
}

const props = withDefaults(defineProps<ListWidgetProps>(), {
    mask: false,
});

const realHeight = computed(() => {
    return { height: props.data.length * 50 + 153 + 'px' }
})

const headSrc = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/ListWidget/${props.theme}.png)`;
    } else {
        return 'none';
    }
})

const linear = computed(() => {
    let len = props.data.length;
    if (len == 1) {
        return {
            tr: '44px',
            pos: '155px',
        }
    } else {
        return {
            tr: 44 * len + 6 * (len - 1) + 'px',
            pos: 152 + 50 * (len - 1) + 'px',
        }
    }
})

</script>
<style lang='scss' scoped>
.list-widget {
    position: relative;
    transform: translateX(100px);

    .border {
        border-image-source: v-bind(headSrc);
        border-image-slice: 107 0 46 0 fill;
        border-image-width: 107px 0px 46px 0px;
        border-image-repeat: round;
    }

    .style {
        display: flex;
        justify-content: center;
        width: 250px;
        min-height: 200px;
        mask: linear-gradient(0deg, transparent v-bind('linear.tr'), #fff v-bind('linear.tr'), #fff 100%);
        -webkit-mask: linear-gradient(0deg, transparent v-bind('linear.tr'), #fff v-bind('linear.tr'), #fff 100%);
        mask-position: 0px v-bind('linear.pos');
        -webkit-mask-position: 0px v-bind('linear.pos');



        .head-text {
            position: absolute;
            top: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 160px;
            height: 44px;
            font-size: 28px;
        }

    }

    .content-text {
        position: absolute;
        left: 13px;
        top: 0px;
        width: 220px;
        min-height: 44px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 110px;
        margin-bottom: 40px;
    }
}
</style>