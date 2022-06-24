<template>
    <header-bar :config="config" :maximizable="true" />
    <div class="container touchable">
        <title-bar :screens="screens" :create="createScreen" :setCurrent="selectScreen" :remove="removeScreen" />
        <div class="body">
            <layouts :widgets="widgets" :widget="widget" :create="showCreateWidget" :remove="removeWidget" :select="selectWidget" @setZ="setZ" />
            <workspace :widgets="widgets" :widget="widget" :removeWidget="removeWidget" :selectWidget="selectWidget" @resize="resize" />
            <properties :widget="widget" />
        </div>
    </div>
    <el-drawer :withHeader="false" v-model="showCreate" direction="btt" size="60%">
        <div class="flex-column">
            <div class="flex-row align-center justify-space-between p-2 drawer-head">
                <span class="drawer-head-name">选择插件</span>
                <i class="iconfont icon-close cursor-pointer" @click="showCreate = false"></i>
            </div>
            <!-- <widget-panel :widgets="widgets" class="drawer-widget-panel" :create="createWidget" @hide="showCreate = false" /> -->
            <NewWidgetPanel :widgets="widgets" class="drawer-widget-panel" :create="createWidget" @hide="showCreate = false" />
        </div>
    </el-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToolkitScreen } from '../use';

import HeaderBar from "./components/HeaderBar.vue";
import Layouts from './components/screen/Layouts.vue';
import Properties from './components/screen/Properties.vue';
import TitleBar from './components/screen/TitleBar.vue';
import Workspace from './components/screen/Workspace.vue';
import WidgetPanel from './components/screen/WidgetPanel.vue';
import NewWidgetPanel from './components/screen/NewWidgetPanel.vue';
export default defineComponent({
    components: {
        HeaderBar,
        TitleBar,
        Layouts,
        Workspace,
        Properties,
        WidgetPanel,
        NewWidgetPanel,
    },
    setup(props) {
        return useToolkitScreen();
    }
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/theme/vars.scss";

.container {
    height: calc(100vh - #{$--header-height});
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow: hidden;
    background: #fafafa;

    .body {
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: row;
    }
}

.drawer-head {
    height: 42px;
    box-sizing: border-box;

    &-name {
        font-size: 18px;
    }
}

.drawer-widget-panel {
    height: calc(60vh - 50px);
}
</style>