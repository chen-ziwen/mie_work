<template>
    <div class="card-show">
        <el-image class="avatar-box" src="/assets/images/raffle/addcard.png" fit="fill" />
        <el-image class="user-avatar" :src="data.userAvatar" fit="fill" :lazy="true" />
        <div class="name-box">
            <span class="user-name">{{ data.userName }}</span>
        </div>
    </div>
</template>
<script lang='ts' setup>
interface AddCardProps {
    data: {
        userName: string;
        userAvatar: string
    }
}
const props = defineProps<AddCardProps>();
</script>
<style lang='scss' scoped>
.card-show {
    display: inline-block;
    position: relative;
    padding: 0px 6px;
    width: 154px;
    height: 197px;

    .avatar-box {
        z-index: 5;
    }

    .user-avatar {
        position: absolute;
        left: 50%;
        top: 40px;
        transform: translateX(-50%);
        width: 79px;
        height: 79px;
    }

    .name-box {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 23px;
        transform: translateX(-50%);
        width: 125px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        overflow: hidden;
        text-align: center;
        color: white;
        font-size: 15px;
    }
}
</style>