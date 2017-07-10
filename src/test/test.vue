<template>
    <div class="hundred5Rank">
        <div> 下拉刷新</div>
        <div>
            <ul class="page-infinite-list">
                <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
           </ul>
           <p v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
                加载中...
           </p>
        </div>
    </div>
</template>

<script>
import {
    Toast,
    Indicator,
    MessageBox,
} from 'mint-ui';
export default {
    name: 'hundred5Rank',
    data() {
        return {
            list: [],
            loading: false,
            allLoaded: false,
            wrapperHeight: 0
        };
    },
    created() {
        // for (let i = 1; i <= 10; i++) {
        //     this.list.push(i);
        // }
        window.addEventListener('scroll', this.throttleV2(this.handleScroll, 500, 2000));
    },
    destroyed () {
        window.removeEventListener('scroll', this.throttleV2(this.handleScroll, 500, 2000));
    },
    mounted() {
        // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        for (let i = 1; i <= 10; i++) {
            this.list.push(i);
        }
    },
    methods: {
        loadMore() {
            this.loading = true;
            Indicator.open('努力加载中...');
            setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
                this.list.push(last + i);
            }
            Indicator.close();
            this.loading = false;
            }, 1000);
        },
        // 获取滚动条当前的位置
        getScrollTop() {
            let scrollTop = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }
            console.log(scrollTop, '获取滚动条当前的位置');
            return scrollTop;
        },
        // 获取当前可视范围的高度
        getClientHeight() {
            let clientHeight = 0;
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
            } else {
                clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
            }
            // console.log(clientHeight, '获取当前可视范围的高度');
            return clientHeight;
        },
        // 获取文档完整的高度
        getScrollHeight() {
            // console.log(Math.max(document.body.clientHeight, document.documentElement.scrollHeight), '获取文档完整的高度');
            return Math.max(document.body.clientHeight, document.documentElement.scrollHeight);
        },
        handleScroll () {
            if (this.getScrollTop() + this.getClientHeight() >= this.getScrollHeight() - 30) {
                console.log('已经到底部');
                this.loadMore();
            }
        },
        throttleV2(fn, delay, mustRunDelay) {
            let timer = null;
            let t_start = null;
            return function(){
                const context = this, args = arguments, t_curr = +new Date();
                clearTimeout(timer);
                if (!t_start){
                    t_start = t_curr;
                }
                if(t_curr - t_start >= mustRunDelay){
                    fn.apply(context, args);
                    t_start = t_curr;
                } else {
                    timer = setTimeout(function(){
                        fn.apply(context, args);
                    }, delay);
                }
            };
        },
    },
};
</script>

<style lang="less">
@import '../util.less';
.hundred5Rank {
    li {
        text-align: center;
        .px2rem(height, 100);
        .px2rem(line-height, 100);
        border-bottom: 1px solid #e5e5e5;
    }
    .page-infinite-loading {
        text-align: center !important;
    }
}
</style>

