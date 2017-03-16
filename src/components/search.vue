<template>
    <div class="home fix-float">
        <!--<div class="com-head">
            {{ title }}
        </div>-->
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="search">
            <input type="text" placeholder="搜索式神" v-model="heroName">
            <span @click="showHero">搜索</span>
        </div>
        <div class="img">
            <img src="../assets/bunny.gif" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                title: '首页',
                heroName: ''
            };
        },
        methods: {
            showHero() {
                if (this.heroName !== '') {
                    this.$router.push(`/SearchHero/${this.heroName}`);
                } else {
                    alert('请输入要搜索的式神');
                }
            }
        }
    };

</script>

<style lang="less">
    @import '../util.less';
    .home {
        text-align: center;
        background: url("../assets/bg.jpg") center center;
        .px2rem(width,
        750);
        .px2rem(height,
        1334);
        background-size: 100% 100%;
        .com-head {
            color: pink;
            .px2rem(font-size,
            30);
            background-color: cyan;
            .px2rem(height,
            50);
            .px2rem(line-height,
            50);
        }
        .logo {
            .px2rem(padding,
            150);
        }
        .search {
            input {
                margin: 0 auto;
                border: 1px solid #333;
                .px2rem(border-radius, 10);
                .px2rem(width,
                600);
                .px2rem(padding,
                10);
                .px2rem(height,
                50);
                .px2rem(line-height,
                50);
                .px2rem(font-size,
                30);
                position: absolute;
                left: 50%;
                .px2rem(margin-left,
                -300);
                .px2rem(margin-top,
                50);
            }
            input:focus {
                border: 1px solid #3fadf9 !important;
                // outline: none;
            }
            span {
                background-color: #3fadf9;
                position: absolute;
                .px2rem(padding,
                10);
                left: 77%;
                .px2rem(font-size,
                30);
                .px2rem(width,
                100);
                .px2rem(margin-top,
                50);
                .px2rem(height,
                50);
                .px2rem(line-height,
                50);
                .px2rem(border-radius, 10);
            }
        }
        .img {
            .px2rem(padding-top,
            300);
        }
    }
</style>