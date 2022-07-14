<template>
    <div class="add-card">
        <el-image src="/assets/images/newraffle/addcard.png" class="username" fit="fill" :lazy="true">
            <el-image :src="data.userAvatar" class="username" :class="{ nomename: !noneName }" fit="fill" :lazy="true"></el-image>
            <span class="name-box over-hidd" v-show="noneName">{{ data.userName }}</span>
        </el-image>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
    name: 'AddCard',
    props: {
        data: {
            type: Object as PropType<{ userAvatar: string, userName: string }>,
            default: { userAvatar: '', userName: '名字' },
        },
        noneName: { type: Boolean, default: true }
    },
})
</script>
<style lang="scss" scoped>
.add-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
</style>

