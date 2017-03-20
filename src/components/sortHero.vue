<template>
    <div class="heroList">
        <ComHead :pageTitle="title">
        </ComHead>
        <div class="wrap-heroList fix-float">
            // <ul class="heroItem" v-for="item in herosInfo" @click="showHeroInfo(item.name)":key="item.id">
            //     <li>
            //         <img :src="`${apiUrl}${item.name}.jpg`" alt="" class="heroImg">
            //     </li>
            //     <li class="heroText">
            //         <p>{{ item.name }}</p>
            //         <p>{{ item.rarity }}</p>
            //     </li>
            // </ul>

            <div class="sortHero">
                <h1>SSR</h1>
                    <ul class="heroItem" v-for="item in herosInfo" @click="showHeroInfo(item.name)":key="item.id" v-if="item.rarity === 'SSR'">
                    <li>
                        <img :src="`${apiUrl}${item.name}.jpg`" alt="" class="heroImg">
                    </li>
                    <li class="heroText">
                        <p>{{ item.name }}</p>
                        <p>{{ item.rarity }}</p>
                    </li>
                </ul>
            </div>
            <div class="sortHero">
                <h1>SSR</h1>
                    <ul class="heroItem" v-for="item in herosInfo" @click="showHeroInfo(item.name)":key="item.id" v-if="item.rarity === 'SR'">
                    <li>
                        <img :src="`${apiUrl}${item.name}.jpg`" alt="" class="heroImg">
                    </li>
                    <li class="heroText">
                        <p>{{ item.name }}</p>
                        <p>{{ item.rarity }}</p>
                    </li>
                </ul>
            </div>
            <div class="sortHero">
                <h1>SSR</h1>
                    <ul class="heroItem" v-for="item in herosInfo" @click="showHeroInfo(item.name)":key="item.id" v-if="item.rarity === 'ßR'">
                    <li>
                        <img :src="`${apiUrl}${item.name}.jpg`" alt="" class="heroImg">
                    </li>
                    <li class="heroText">
                        <p>{{ item.name }}</p>
                        <p>{{ item.rarity }}</p>
                    </li>
                </ul>
            </div>
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
                apiUrl: ''
            };
        },
        components: {
            ComHead
        },
        created() {
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
            .px2rem(padding-top, 80);
            .px2rem(padding-bottom, 100);
            // background-color: #f1f1f1;
            .heroItem {
                width: 50%;
                float: left;
                .px2rem(border-width, 10);
                .px2rem(padding, 20);
                box-sizing: border-box;
                li {
                    float: left;
                    text-align: center;
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