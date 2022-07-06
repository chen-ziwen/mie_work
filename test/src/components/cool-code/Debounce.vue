<template>
    <div class="debounce">
        <button @click="displayList">点击我触发</button>
    </div>
    <div class="box" v-show="display"></div>
</template>
<script lang='ts' setup>
import { ref, useAttrs } from 'vue';
import { Debounce } from '@/general/debounce';

const display = ref<boolean>(false);

function touch(name: string, age: number) {
    console.log(`姓名${name},年龄${age}`);
}

const debounce = new Debounce().use(touch, 2000);
const debounce2 = new Debounce().use(change, 2000, true);

debounce('chiko', 18);

function change(bol: boolean) {
    display.value = false;
}
function displayList() {
    display.value = true;
    debounce2();
}

</script>
<style lang='scss' scoped>
.debounce {
    width: 200px;
    height: 200px;

    >button {
        width: 100px;
        height: 50px;
    }

}

.box {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(to right, red, blue);
}
</style>