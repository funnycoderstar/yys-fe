<template>
    <div class="heroList">
        <ComHead :pageTitle="title">
        </ComHead>
        <div class="wrap-heroList fix-float searchHero" v-if="herosInfo && herosInfo.length > 0">
            <ul class="heroItem" v-for="(item, index) in herosInfo" :key="index" @click="showHeroInfo(item.name)">
                <li>
                    <img :src="`${apiUrl}${item.name}.jpg`" alt="" class="heroImg">
                </li>
                <li class="heroText">
                    <p>{{ item.name }}</p>
                    <p>{{ item.rarity }}</p>
                </li>
            </ul>
        </div>
        <div class="no-hero" v-else>暂无该式神</div>
    </div>
</template>

<script>
import vue from 'vue';
import ComHead from './comHead.vue';
export default {
    name: 'heroList',
    data() {
        return {
            title: '搜索结果',
            herosInfo: null,
            apiUrl: ''
        };
    },
    components: {
        ComHead
    },
    created() {
        this.apiUrl = window.apiUrl;
        vue.axios.get(`${window.apiUrl}hero/${this.$route.params[0]}`).then((response) => {
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
.searchHero {
    .px2rem(height, 1260);
}

.no-hero {
    .px2rem(padding-top, 100);
    .px2rem(font-size, 16);
    text-align: center;
    color: #969696;
}
</style>