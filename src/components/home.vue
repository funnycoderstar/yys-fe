<template>
    <div class="home">
        <div class="com-head">
            {{ title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                title: '首页'
            };
        }
    };

</script>

<style lang="less">
    @import '../util.less';
    @color: red;
    .home {
        background-color: @color;
        .px2rem(font-size: 30);
    }
</style>
