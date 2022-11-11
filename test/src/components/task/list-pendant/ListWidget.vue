<template>
    <div class="list-widget">
        <div class="border style">
            <span class="head-text">
                {{ head }}
            </span>
            <div class="content-text">
                <RowListLi :theme="theme" :mask="mask" v-for="(text, index) in data" :key="index" :width="200" :height="70">
                    {{ text }}
                </RowListLi>
            </div>
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

const headSrc = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/ListWidget/${props.theme}.png)`;
    } else {
        return 'none';
    }
})

</script>
<style lang='scss' scoped>
.list-widget {
    transform: translateX(100px);

    .border {
        border-image-source: v-bind(headSrc);
        border-image-slice: 107 0 46 0 fill;
        border-image-width: 107px 0px 46px 0px;
        border-image-outset: 0px 0px 0px 0px;
        border-image-repeat: round;
    }

    .style {
        position: relative;
        display: flex;
        justify-content: center;
        width: 250px;
        min-height: 200px;

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

        .content-text {
            width: 220px;
            min-height: 44px;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 113px;
            margin-bottom: 40px;
            // background-color: rgba(0, 0, 0, 0.2);
        }
    }
}
</style>