<template>
    <div class="hero">
        <img src="../assets/angle-leftB@3x.png" @click="handelBack">
        <div class="hero-info">
            <ul>
                <li>名称</li>
                <li>CV</li>
                <li>稀有度</li>
                <li>类型</li>
                <li>斗计指数</li>
                <li>刷图指数</li>
            </ul>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">觉醒材料</mt-tab-item>
            <mt-tab-item id="2">式神技能</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <HeroAwaken></HeroAwaken>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <HeroSkills></HeroSkills>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import {
        Navbar,
        TabItem
    } from 'mint-ui';
    import HeroAwaken from './heroAwaken.vue';
    import HeroSkills from './heroSkills.vue';

    export default {
        name: 'hero',
        data() {
            return {
                selected: '1'
            };
        },
        components: {
            Navbar,
            TabItem,
            HeroAwaken,
            HeroSkills
        },
        methods: {
            handelBack() {
                this.$router.back();
            }
        }
    };
</script>

<style lang="less">
    @import '../util.less';
    *{
        list-style: none;
        margin:0;
        padding:0;
    }
    .hero {
        img{
            .px2rem(width,
            20);
            float:left;
            .px2rem(padding,
                20);
        }
        .hero-info{
            .px2rem(width,
            750);
            .px2rem(height,
            300);
            .px2rem(font-size,
            26);
            background: url("../assets/heroBg.jpg") center center no-repeat;
            background-size: 100% 100%;
            ul{
                .px2rem(padding-top,
                30);
                li{
                    color:red;
                    text-align: center;
                    .px2rem(line-height,
                    40);
                }
            }
        }
        .mint-tab-item-label{
            .px2rem(font-size,
            30);
            .px2rem(padding,
                10);
        }
    }
</style>