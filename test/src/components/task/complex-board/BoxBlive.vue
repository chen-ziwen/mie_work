<template>
    <div class="box-blive">
        <div class="content-box">
            <div class="top-message">
                <div class="user-message text-hidden">
                    <el-avatar class="user-avatar ava-margin" src="/assets/test/ava.jpeg" :size="32" fit="fill"></el-avatar>
                    <span class="user-name ">半颗咸蛋黄点</span>
                </div>
                <div class="gift-price text-hidden">
                    <el-image class="gift-logo ava-margin" src="/assets/test/ava.jpeg" fit="contain"></el-image>
                    <span class="price">666</span>
                </div>

            </div>
            <div class="bottom-message">
                <p class="gift-message text-hidden">
                    <el-image class="gift-icon ava-margin" src="/assets/test/ava.jpeg" fit="contain"></el-image>
                    <span>赠送 “浪漫热气球” x1</span>
                </p>
            </div>

        </div>
    </div>
</template>
<script lang='ts' setup>
import { computed } from 'vue';
interface BoxBlive {
    theme: string;
    back: string;
}
const props = defineProps<BoxBlive>();

const src = computed(() => {
    return `url(/assets/images/ComplexBoard/${props.theme}/big/${props.back}.png)`
})
</script>
<style lang='scss' scoped>
.white-space {
    white-space: nowrap;
}

.text-hidden {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.ava-margin {
    margin-left: 15px;
    margin-right: 8px;
}

.box-blive {
    background-image: v-bind(src);
    background-size: 490px 130px;
    width: 490px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: white;

    .content-box {
        // 真实区域的大小
        width: 380px;
        height: 85px;
        display: flex;
        flex-direction: column;

        .top-message {
            height: 50%;
            display: flex;
            align-items: center;

            .user-message {
                width: 260px;

                .user-avatar {
                    vertical-align: text-bottom;
                }
            }

            .gift-price {
                width: 125px;

                .gift-logo {
                    width: 25px;
                    height: 25px;
                    vertical-align: text-bottom;
                }

                .price {
                    text-align: end;
                }
            }
        }

        .bottom-message {
            height: 50%;
            display: flex;
            align-items: center;

            .gift-message {
                margin: 0;


                .gift-icon {
                    width: 30px;
                    height: 30px;
                    vertical-align: text-bottom
                }
            }
        }
    }
}
</style>