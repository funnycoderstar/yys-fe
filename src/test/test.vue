<template>
    <div class="test">
        <div class="testNav">
            <div :class="{'selected':tab === 1,'testTitle':true}" @click="toTab(1)">标题一</div>
            <div :class="{'selected':tab === 2,'testTitle':true}"  @click="toTab(2)">标题二</div>
        </div>
        <div class="container">
            <keep-alive>
                <Test1 v-if="tab === 1">
                </Test1>
                <Test2 v-else>
                </Test2>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import Test1 from './test1.vue';
    import Test2 from './test2.vue';
    export default {
        data() {
            return {
                tab: 1,
            };
        },
        components: {
            Test1,
            Test2,
        },
        methods: {
            toTab(index) {
                this.tab = index;
            },
        },
    }
</script>

<style lang="less">
.test {
    width: 100%;
    .testNav {
        height: 60px;
        line-height: 60px;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        .testTitle {
            flex: 1;
            text-align: center;
        }
        .selected {
            color: red;
        }
    }
}
</style>


