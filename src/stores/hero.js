import vue from 'vue';
const hero = {
    state: {
        heroInfo: {}
    },
    mutations: {
        setHeroInfo(state, heroInfo) {
            state.heroInfo = heroInfo;
        }
    },
    actions: {
        getHeroInfo(context, data) {
            return vue.axios.get(`${data.apiUrl}/${data.heroName}`).then((response) => {
                context.commit('setHeroInfo', response.data);
                return response.data;
            });
        }

    }

};

export default hero;