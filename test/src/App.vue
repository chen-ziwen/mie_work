<template>
    <div class="all-style">
        <!-- 加班挑战 -->
        <!-- <Timeout></Timeout> -->
        <!-- <all-timeout></all-timeout> -->

        <!-- 音乐控制台 -->
        <!-- <ConfigAll></ConfigAll> -->


        <!-- 标签选择  三个版本 -->
        <!-- 最终版 -->
        <!-- <LabelCard></LabelCard> -->
        <!-- 测试版 -->
        <!-- <LabelCardTest></LabelCardTest> -->
        <!-- <LabelCardTest2></LabelCardTest2> -->

        <!-- b站排行榜 -->
        <!-- <RankTest></RankTest> -->

        <!-- Debounce节流函数测试 -->
        <!-- <Debounce></Debounce> -->

        <!-- 卡牌抽奖 -->
        <!-- <Raffle></Raffle> -->

        <!-- <LostList></LostList> -->

        <!-- 列表挂件 -->
        <!-- <list-pendant></list-pendant> -->

        <!-- <Mask></Mask> -->
        <!-- <Inset></Inset> -->

        <!-- 进度条 -->
        <!-- <TestBar></TestBar> -->

        <!-- 简洁心愿目标 -->
        <!-- <GoalsSimple></GoalsSimple> -->

        <!-- 综合弹幕 -->
        <!-- <test></test> -->
        <!-- <Regex></Regex> -->

        <!-- 世界杯 -->
        <!-- <WorldCupConsole></WorldCupConsole> -->
        <!-- <TeamAll></TeamAll> -->
        <GamePanel></GamePanel>
        <!-- <RandomName></RandomName> -->

        <!-- 天选之人 -->
        <!-- <TheChosenCard></TheChosenCard> -->
    </div>
</template>
<script setup lang="ts">
import Timeout from '@/components/task/gift-timeout/Timeout.vue';
import AllTimeout from './components/task/gift-timeout/AllTimeout.vue';

import ConfigAll from '@/components/task/config-play/ConfigAll.vue';

import LabelCard from './components/task/label-card/LabelCard.vue';
import LabelCardTest from './components/task/label-card/LabelCardTest.vue';
import LabelCardTest2 from './components/task/label-card/LabelCardTest2.vue';

import RankTest from './components/task/rank/RankTest.vue';

import Debounce from './components/cool-code/Debounce.vue';

import Raffle from './components/task/raffle/Raffle.vue';

import LostList from './components/task/raffle/module/LostList.vue';

import ListPendant from './components/task/list-pendant/ListPendant.vue';

import Mask from './components/task/mask/mask.vue';
import Inset from './components/task/mask/inset.vue';
import TestBar from './components/common/progress-bar/TestBar.vue';

import GoalsSimple from './components/task/goals-simple/GoalsSimple.vue';

import test from './components/task/complex-board/test.vue';
import Regex from './components/task/test/Regex.vue';

import AllCup from './components/task/worldcup/AllCup.vue';
import TeamInfo from './components/task/worldcup/against/TeamInfo.vue'
import WorldCupConsole from './components/task/worldcup/WorldCupConsole.vue';
import TeamAll from './components/task/worldcup/against/TeamAll.vue';
import GamePanel from './components/task/worldcup/game-panel/GamePanel.vue'

import RandomName from './components/task/test/RandomName.vue';

import TheChosenCard from './components/task/the-chosen/TheChosenCard.vue';
</script >

<style lang="scss">
@import '@/assets/world-cup/root.scss';
@import '@/assets/world-cup/worldConsole.scss';
@import '@/assets/mask-anime/mask-anime.scss';

.all-style {
    width: 100vw;
    height: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: pink; */
}
</style>
