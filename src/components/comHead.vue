<template>
    <div>
        <div class="com-header" v-show="showHead">
            <img src="../assets/angle-left@3x.png" class="backBtn" @click="handleBack">
            <div class="head-title">
                <span>{{ pageTitle }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ComHead',
        props: {
            pageTitle: {
                String
            }
        },
        data() {
            return {
                showHead: true
            };
        },
        created() {
            const ua = navigator.userAgent.toLowerCase();
            if (/micromessenger/.test(ua)) {
                this.showHead = false;
            };
        },
        methods: {
            handleBack() {
                this.$router.back();
            }
        }
    };
</script>
<style lang="less">
@import '../util.less';
    .com-header {
        .px2rem(height, 60);
        .px2rem(padding, 10);
        text-align: center;
        position: fixed;
        width: 100%;
        z-index: 100;
       .px2rem(line-height, 60);
        background-color: #fff;
        .px2rem(font-size, 36);
        color: #333;
        border-bottom: 1px solid #e5e5e5 !important;
        .head-title{
            width:80%;
            margin:0 auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
       
        .backBtn {
            /*height: 20px;*/
            .px2rem(margin-top, 10);
           .px2rem(width, 24);
            float: left;
        }
    }
</style>