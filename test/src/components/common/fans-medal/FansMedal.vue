<template>
    <div :class="platform">
        <div :class="classObj" :style="styleObj">
            <img v-if="showIcon" class="fans-medal-icon" :src="icon" />
            <div v-if="showName" class="fans-medal-name">{{ name }}</div>
            <div v-if="showLevel" class="fans-medal-level">{{ level }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: "FansMedal",
    props: {
        platform: {
            type: String,
        },
        name: {
            type: String,
        },
        level: {
            type: Number,
        },
        icon: {
            type: String,
        },
        background: {
            type: String,
        }
    },
    setup(props) {
        const showLevel = computed(() => {
            return props.platform === "bilibili";
        });

        const showIcon = computed(() => {
            return props.icon && props.icon.length > 0;
        });

        const showName = computed(() => {
            return props.platform;
        })

        const specialBg = computed(() => {
            return props.background && props.background.length > 0;
        });

        const styleObj = computed(() => {
            if (specialBg.value) {
                return {
                    "background-image": `url(${props.background})`
                };
            } else {
                return {}
            }
        });

        const classObj = computed(() => {
            if (specialBg.value) {
                return {
                    "fans-medal": true,
                    "special": true,
                }
            } else {
                const level = "level-" + props.level;
                return {
                    "fans-medal": true,
                    [level]: true
                }
            }
        })

        return {
            showLevel,
            showIcon,
            showName,
            specialBg,
            styleObj,
            classObj
        }
    }

})
</script>

<style lang="scss" scoped>
@import "./bilibili.scss";
</style>