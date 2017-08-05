<template>
    <div class="heroList">
        <ComHead :pageTitle="title" v-show="showHead">
        </ComHead>
        <div class="wrap-heroList fix-float" :class="{'com-page-wrap':showHead ,'com-page-wrap1': !showHead}">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">SSR</mt-tab-item>
                <mt-tab-item id="2">SR</mt-tab-item>
                <mt-tab-item id="3">R</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="sortHero fix-float">
                        <ul class="heroItem fix-float"
                            v-for="item in herosInfo"
                            @click="showHeroInfo(item.name)"
                            :key="item.id"
                            v-if="item.rarity === 'SSR'">
                            <li>
                                <img :src="`${apiUrl}${item.name}.jpg`"
                                     alt=""
                                     class="heroImg">
                            </li>
                            <li class="heroText">
                                <p>{{ item.name }}</p>
                                <p>{{ item.rarity }}</p>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="sortHero fix-float">
                        <ul class="heroItem fix-float"
                            v-for="item in herosInfo"
                            @click="showHeroInfo(item.name)"
                            :key="item.id"
                            v-if="item.rarity === 'SR'">
                            <li>
                                <img :src="`${apiUrl}${item.name}.jpg`"
                                     alt=""
                                     class="heroImg">
                            </li>
                            <li class="heroText">
                                <p>{{ item.name }}</p>
                                <p>{{ item.rarity }}</p>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <div class="sortHero fix-float">
                        <ul class="heroItem fix-float"
                            v-for="item in herosInfo"
                            @click="showHeroInfo(item.name)"
                            :key="item.id"
                            v-if="item.rarity === 'R'">
                            <li>
                                <img :src="`${apiUrl}${item.name}.jpg`"
                                     alt=""
                                     class="heroImg">
                            </li>
                            <li class="heroText">
                                <p>{{ item.name }}</p>
                                <p>{{ item.rarity }}</p>
                            </li>
                        </ul>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
    
        </div>
    </div>
</template>

<script>
import vue from 'vue';
import ComHead from './comHead.vue';
export default {
    name: 'heroList',
    data() {
        return {
            title: '式神列表',
            herosInfo: null,
            apiUrl: '',
            selected: '1',
            showHead: true
        };
    },
    components: {
        ComHead
    },
    created() {
        const ua = navigator.userAgent.toLowerCase();
        if (/micromessenger/.test(ua)) {
            this.showHead = false;
        }
        this.apiUrl = window.apiUrl;
        vue.axios.get(`${window.apiUrl}heros`).then((response) => {
            this.herosInfo = response.data;
        });
    },
    methods: {
        showHeroInfo(name) {
            this.$router.push(`/hero/${name}`);
        }
    }

};

</script>

<style lang="less">
@import '../util.less';
.fix-float {
    &::after {
        content: ' ';
        display: block;
        clear: both;
    }
}

.heroList {
    .wrap-heroList {
        .px2rem(padding-bottom, 100);
        .mint-tab-item-label {
            .px2rem(font-size, 28);
        }
        .mint-navbar {
            position: fixed;
            width: 100%;
            z-index: 100;
            border-bottom: 1px solid #e5e5e5;
            border-top: 1px solid #e5e5e5;
        }

        .mint-tab-container {
            .px2rem(padding-top, 90);
        }
        .is-selected {
            border-bottom: 1px solid #3fadf9 !important;
            margin-bottom: 0 !important;
        }
        .mint-tab-item {
            .comDis(padding, 20, 0);
        }
        .heroItem {
            width: 50%;
            float: left;
            .px2rem(border-width, 10);
            .px2rem(padding, 15);
            .px2rem(padding-left, 50);
            box-sizing: border-box;
            li {
                float: left;
                // text-align: center;
                img {
                    .px2rem(width, 120);
                    border-radius: 50%;
                }
            }
            .heroText {
                .px2rem(margin-left, 30);
                p:nth-of-type(1) {
                    .px2rem(font-size, 30);
                    .px2rem(padding-top, 33);
                    color: #333;
                }
                p:nth-of-type(2) {
                    .px2rem(padding-top, 10);
                    .px2rem(font-size, 28);
                    color: #666;
                }
            }
        }
    }
}
</style>