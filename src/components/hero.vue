<template>
    <div class="hero">
        <img src="../assets/angle-leftB@3x.png" @click="handelBack" class="backBtn">
        <div class="hero-info">
            <div class="heroFace">
                <img src="../assets/jiu.jpg" alt="">
            </div>
            <ul>
                <li>名称:{{ heroInfo.name }}</li>
                <li>CV:{{ heroInfo.cv }}</li>
                <li>稀有度:{{ heroInfo.rarity }}</li>
                <li>类型:{{ heroInfo.type }}</li>
                <li>斗技指数:{{ heroInfo.pkExponent }}</li>
                <li>刷图指数:{{ heroInfo.brushMapExponent }}</li>
            </ul>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">觉醒材料</mt-tab-item>
            <mt-tab-item id="2">式神技能</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" v-if="awaken">
                <HeroAwaken
                :skill="awaken.skill"
                :material="awaken.material"
                :crit="awaken.crit"
                :speed="awaken.speed"
                :defense="awaken.defense"
                :life="awaken.life"
                :attack="awaken.attack"
                ></HeroAwaken>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <HeroSkills
                v-for="item in heroInfo.skills"
                :upgrade="item.upgrade"
                :effect="item.effect"
                :Consumption="item.Consumption"
                :name="item.name"
                ></HeroSkills>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import { Navbar, TabItem } from 'mint-ui';
    import HeroAwaken from './heroAwaken.vue';
    import HeroSkills from './heroSkills.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'hero',
        data() {
            return {
                selected: '1',
                awaken: null
            };
        },
        components: {
            Navbar,
            TabItem,
            HeroAwaken,
            HeroSkills
        },
        computed: mapState({
            heroInfo: state => state.hero.heroInfo
        }),
        created() {
            this.$store.dispatch('getHeroInfo', {
                apiUrl: 'http://192.168.199.220:6600/hero',
                heroName: this.$route.params[0]
            }).then((response) => {
                this.awaken = response.awaken;
            });
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
    * {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .hero {
        .backBtn {
            .px2rem(width, 20);
            float: left;
            .px2rem(padding, 20);
        }
        .hero-info {
            .px2rem(width, 750);
            .px2rem(height, 300);
            .px2rem(font-size, 26);
            background: url("../assets/heroBg.jpg") center center no-repeat;
            background-size: 100% 100%;
            .heroFace {
                float: left;
                height: 100%;
                img {
                    .px2rem(padding-top,
                    75);
                }
            }
            ul {
                .px2rem(padding-top,
                30);
                li {
                    color: red;
                    text-align: center;
                    .px2rem(line-height,
                    40);
                }
            }
        }
        .mint-tab-item-label {
            .px2rem(font-size,
            30);
            .px2rem(padding,
            10);
        }
    }
</style>