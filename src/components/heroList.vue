<template>
    <div class="heroList">
        <ComHead :pageTitle="title">
        </ComHead>
        <div class="wrap-heroList">
            <ul class="heroItem" @click="showHeroInfo">
                <li>
                    <img src="../assets/一目连.jpg" alt="" class="heroImg">
                </li>
                <li class="heroText">
                    <p v-text="heroName"></p>
                    <p>SSR</p>
                </li>
            </ul>
            <ul class="heroItem">
                <li>
                    <img src="../assets/一目连.jpg" alt="" class="heroImg">
                </li>
                <li class="heroText">
                    <p>一目连</p>
                    <p>SSR</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ComHead from './comHead.vue';
    export default {
        name: 'heroList',
        data() {
            return {
                title: '式神列表',
                heroName: '一目连'
            };
        },
        components: {
            ComHead
        },
        methods: {
            showHeroInfo() {
                this.$router.push(`/hero/${this.heroName}`);
            }
        }

    };

</script>

<style lang="less">
@import '../util.less';
.heroList {
    .wrap-heroList {
        .px2rem(padding-top, 80);
        .heroItem {
            width: 50%;
            float: left;
            border-top: 1px solid #f5f5f5;
            .px2rem(border-width, 10);
            .px2rem(padding, 20);
            box-sizing: border-box;
            li {
                float: left;
                text-align: center;
                img {
                     border-radius: 50%;
                }
            }
            .heroText {
                .px2rem(margin-left, 30);
                p:nth-of-type(1) {
                    .px2rem(font-size, 30);
                    .px2rem(padding-top, 35);
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