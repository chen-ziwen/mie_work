<template>
    <div class="rank-box-scroll" ref="overScroll">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
interface scroll {
    length: Record<string, any>;
    delay?: number;
}
const props = withDefaults(defineProps<scroll>(), {
    delay: 2200,
});
const overScroll = ref<HTMLDivElement>();
const scrollHeight = ref<string>();
const change = ref<boolean>(true);
const emits = defineEmits(['display'])
onMounted(() => console.log('dsadasds', props))
let timeout: NodeJS.Timeout;
function debounce(dely: number) {
    if (!overScroll.value) { return; }
    const classList = overScroll.value.classList;
    clearTimeout(timeout);
    classList.remove('move-content');
    timeout = setTimeout(() => {
        if (!overScroll.value) { return; }
        if (overScroll.value.scrollHeight > overScroll.value.clientHeight) {
            scrollHeight.value = (overScroll.value.clientHeight - overScroll.value.scrollHeight) + 'px';
        }
        window.requestAnimationFrame(() => {
            classList.add('move-content');
        })
        overScroll.value.addEventListener('webkitAnimationEnd', function () {
            change.value = false;
            emits('display', change.value);
        })
    }, dely);
}

watch(() => props.length, () => debounce(props.delay), { deep: true });

</script>

<style lang="scss" scoped>
.rank-box-scroll {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
}

.move-content {
    animation: scroll 3s ease-in-out forwards;
}

@keyframes scroll {
    0% {
        transform: translateY(0px);
    }

    20% {
        transform: translateY(0px);

    }

    100% {
        transform: translateY(v-bind(scrollHeight));
        display: none;
    }
}
</style>