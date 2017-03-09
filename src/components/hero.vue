<template>
    <div class="hero">
        <img src="../assets/angle-leftB@3x.png" @click="handelBack" class="backBtn">
        <div class="hero-info">
            <div class="heroFace" v-if="heroInfo.name">
                <img :src="require(`../assets/${heroInfo.name}.jpg`)" alt="">
            </div>
            <div v-else  class="heroFace"></div>
            <ul v-if="heroInfo">
                <li>名称: <span>{{ heroInfo.name }}</span></li>
                <li>CV: <span>{{ heroInfo.cv }}</span></li>
                <li>稀有度: <span>{{ heroInfo.rarity }}</span></li>
                <li>类型: <span>{{ heroInfo.type }}</span></li>
                <li>斗技指数: <span>{{ heroInfo.pkExponent }}</span></li>
                <li>刷图指数: <span>{{ heroInfo.brushMapExponent }}</span></li>
            </ul>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">觉醒材料</mt-tab-item>
            <mt-tab-item id="2">式神技能</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" v-if="awaken">
                <HeroAwaken :skill="awaken.skill" :material="awaken.material" :crit="awaken.crit" :speed="awaken.speed" :defense="awaken.defense"
                    :life="awaken.life" :attack="awaken.attack"></HeroAwaken>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" v-if="heroInfo.skills">
                <HeroSkills v-for="item in heroInfo.skills" :upgrade="item.upgrade" :effect="item.effect" :Consumption="item.Consumption"
                    :name="item.name"></HeroSkills>
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
            heroInfo: state => state.hero.heroInfo[0]
        }),
        created() {
            this.$store.dispatch('getHeroInfo', {
                apiUrl: window.apiUrl,
                heroName: this.$route.params[0]
            }).then((response) => {
                this.awaken = response[0].awaken;
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
            background-color: peachpuff;
            .heroFace {
                float: left;
                height: 100%;
                .px2rem(width, 250);
                img {
                    .px2rem(padding-top, 25);
                    .px2rem(width, 250);
                }
            }
            ul {
                float:left;
                .px2rem(padding-top, 30);
                .px2rem(margin-left, 100);
                li {
                    .px2rem(line-height, 40);
                    span {
                        color: red;
                        // .px2rem(padding-left, 30);
                    }
                }
            }
        }
        .mint-tab-item-label {
            .px2rem(font-size, 30);
            .px2rem(padding, 10);
        }
    }
</style>