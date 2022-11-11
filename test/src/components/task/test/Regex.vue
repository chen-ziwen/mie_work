<template>
    {{repStr(s,hello)}}
    <div id="worldCup" :data-theme="theme" @click="judge">
        <div class="text">666</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let s = '你好{name} {count}  {cen} 不是';
// const regex = /\{.*?\}/g;
// const str = /\s*/g;
const change = ref<boolean>(false);
const theme = ref<string>('white');
const judge = () => {
    change.value = !change.value
    if (change.value) {
        theme.value = 'white'
    } else {
        theme.value = 'black'
    }
}
// function repStr(s: string, name: string, count: string, cen: string) {
//     if (Array.isArray(s.match(regex))) {
//         const arr = s.match(regex)?.map(x => x.replace(str, ''));
//         if (arr) {
//             for (let i = 0; i < arr.length; i++) {
//                 switch (arr[i]) {
//                     case "{礼物名}":
//                         arr[i] = name;
//                         break;
//                     case "{数量}":
//                         arr[i] = count;
//                         break;
//                     case "{惩罚}":
//                         arr[i] = cen;
//                         break;
//                 }
//             }
//         }
//         console.log(arr, s);

//     }
//     return s
// }
const hello = {
    name: '虎粮',
    count: "100",
    cen: '学猫叫'
}
function repStr(s: string, obj: Record<string, string>) {
    for (var key in obj) {
        s = s.replace(new RegExp("\\{" + key + "\\}", "g"), obj[key]);
    }
    return s;
}

</script>

<style lang="scss" scoped>
#worldCup {
    width: 100px;
    height: 100px;
    background-color: var(--back-color);

    .text {
        color: var(--top-color);
    }
}
</style>