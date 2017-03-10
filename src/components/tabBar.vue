<template>
    <div class="tab-bar">
        <ul class="tab-bar-container">
            <TabBarItem
                v-for="(item, index) of items"
                :key="item.id"
                :name="item.name"
                :selected="isSelected(item.route)"
                :route="item.route"
            ></TabBarItem>
        </ul>
    </div>
</template>

<script>
    import TabBarItem from './tabBarItem';

    export default {
        data() {
            return {
                items: [{
                    name: '玩家',
                    route: '/player'
                }, {
                    name: '式神',
                    route: '/heroList'
                } ]
            };
        },
        name: 'tabBar',
        components: {
            TabBarItem
        },
        methods: {
            isSelected(route) {
                return this.$route.path.indexOf(route) !== -1 || (this.$route.path === '/' && route === '/index');
            }
        }
    };
</script>
<style lang="less">
@import '../util.less';
    .tab-bar {
        width: 100%;
        .px2rem(height, 98);
        background-color: #f5f5f5;
        position: fixed;
        z-index: 20;
        bottom: 0;
        border-top: 1px solid #e5e5e5;
    }
    
    .tab-bar-container {
        margin: 0;
    }
</style>