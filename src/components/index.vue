<template>
    <div class="main-div">
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>
<script>
    import TabBar from './tabBar';
    export default {
        name: 'Index',
        components: {
            TabBar
        }
    };
</script>
<style lang="less">
@import '../util.less';
    .main-div {
        width: 100%;
        height: 100%;
        .px2rem(padding-bottom, 98);
        box-sizing: border-box;
    }
</style>