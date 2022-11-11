<template>
    <div class="nine-plain" :class="parity">
        <div class="border style odd_even" :style="whstyle">
            <slot></slot>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { computed } from 'vue';
interface NinePlainProps {
    theme: string;
    parity?: string;
    width?: number;
    height?: number;
}
const props = defineProps<NinePlainProps>();
const src = computed(() => {
    if (props.theme !== 'none') {
        return `url(/assets/common/NinePlain/${props.theme}.png)`;
    } else {
        return 'none';
    }
})
const whstyle = computed(() => {
    const width = props.width + 'px' || 'auto';
    const height = props.height + 'px' || 'auto';
    return { width, height };
})
</script>
<style lang='scss' scoped>
.border {
    border-image-source: v-bind(src);
    border-image-slice: 20 20 20 20 fill;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 10px 10px 10px 10px;
    border-image-repeat: stretch;
}

.style {
    display: inline-block;
    white-space: nowrap;
    font-size: 24px;
    // overflow: hidden;
}

// 奇偶的显示方式
.odd {
    .odd_even {
        width: 126px;
        height: 70px;
    }
}

.even {
    &:first-of-type {
        .odd_even {
            width: 260px;
            height: 74px;

            :deep(.text-content) {
                justify-content: center;
                margin: 0px !important;

                .gift-count>img {
                    width: 54px !important;
                    height: 54px !important;
                }

                .amount {
                    font-size: 20px !important;
                }

                .amount::after {
                    width: 74px !important;
                    height: 1px !important;
                }

                .time-message {
                    font-size: 20px !important;
                }
            }
        }
    }

    &:not(:first-of-type) {
        .odd_even {
            width: 126px;
            height: 70px;
        }
    }
}
</style>