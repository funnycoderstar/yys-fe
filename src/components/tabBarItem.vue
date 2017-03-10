<template>
    <div class="item-container" @click="handleClick">
        <i class="icon":class="{ selected }" v-html="'&#xe6bb'" v-if="name==='玩家'"></i>
        <i class="icon":class="{ selected }" v-html="'&#xe635;'" v-else></i>
        <p class="item-name" :class="{ selected }">
            {{ name }}
        </p>
    </div>
</template>

<script>

    export default {
        name: 'tabBarItem',
        props: {
            name: {
                type: String,
                default: 'name'
            },
            selected: {
                type: Boolean,
                default: false
            },
            route: {
                type: String,
                default: '/'
            }
        },
        methods: {
            handleClick() {
                this.$router.push(`/index${this.route}`);
            }
        }
    };
</script>

<style lang="less">
@import '../util.less';
    @font-face {
        font-family: 'iconfont';  /* project id 250493 */
        src: url('//at.alicdn.com/t/font_sdu82zs5jqbyb9.eot');
        src: url('//at.alicdn.com/t/font_sdu82zs5jqbyb9.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_sdu82zs5jqbyb9.woff') format('woff'),
        url('//at.alicdn.com/t/font_sdu82zs5jqbyb9.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_sdu82zs5jqbyb9.svg#iconfont') format('svg');
    }
    .icon {
        font-family: 'iconfont';
        font-style: normal;
        .px2rem(font-size, 50);
        .px2rem(top, -12);
        position: relative;
        &.selected {
           color: #3fadf9;
       }
    }
   .item-container {
       float: left;
       width: 50%;
       text-align: center;
   }
   .item-name {
       .px2rem(font-size, 22);
       .px2rem(top, -12);
       position: relative;
       color: #666;
       &.selected {
           color: #3fadf9;
       }
   }
   .item-img {
       .px2rem(width, 48);
       .px2rem(height, 48);
       .px2rem(top, -12);
       position: relative;
   }
</style>