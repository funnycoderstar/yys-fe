<template>
    <div class="heroList">
        <ComHead :pageTitle="title">
        </ComHead>
        <div class="wrap-heroList fix-float">
            <ul class="heroItem" v-for="item in herosInfo" @click="showHeroInfo(item.name)">
                <li>
                    <img :src="require(`../assets/${item.name}.jpg`)" alt="" class="heroImg">
                </li>
                <li class="heroText">
                    <p>{{ item.name }}</p>
                    <p>{{ item.rarity }}</p>
                </li>
            </ul>
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
                title: '搜索结果',
                herosInfo: null
            };
        },
        components: {
            ComHead
        },
        created() {
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
