<template>
    <div>

    </div>
</template>

<script lang="ts" setup>

interface Values {
    name: string;
    age: number;
    price: number;
    tel: number;
    "gift-custom": symbol;
}
// 从中挑选类型，通过联合类型的方式, 
// 1. keyof 会返回一个类型的所有 key 的联合类型
// 2. 类型索引可以通过 key 来获取对应 value 的类型
// 3. [R in k] 中的 in，类似于 for...in ，它可以遍历联合类型

/* 解释，泛型传入两个参数,T和K，K的所有类型都是包含在 keyof T 中的，因为 
keyof T 会返回一个 包含T所有键值的联合类型，所以K必须包含再这个T键值所组成的这个
联合类型中，下面的 [R in K] 中的 in 这个关键字会遍历联合类型，所以 [R in K] 为
K的某一个键值， T[R]，因为类型索引可以通过 key 来获取对应 value 的类型，所以T[R]
相当于拿到T类型中的某一项类型值。

*/

type MyPick<T, K extends keyof T> = {
    [R in K]: T[R] // 这里面的T[R]
}

type Type1 = MyPick<Values, "name" | "age" | "tel">
type Type2 = MyPick<Values, "name" | "age">
type Type3 = MyPick<Values, "name" | "age" | "gift-custom">

</script>

<style>

</style>