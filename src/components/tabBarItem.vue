<template>
    <div class="item-container" @click="handleClick">
        <img :src="selected ? imageSelected : image" class="item-img">
        <p class="item-name" :class="{ selected }">
            {{ name }}
        </p>
    </div>
</template>

<script>
    import defaultImage from '../assets/home@3x.png';
    import defaultImageSelected from '../assets/home_hover@3x.png';

    export default {
        name: 'tabBarItem',
        props: {
            name: {
                type: String,
                default: 'name'
            },
            image: {
                type: String,
                default: defaultImage
            },
            imageSelected: {
                type: String,
                default: defaultImageSelected
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
           color: #ff6c00;
       }
   }
   .item-img {
       .px2rem(width, 48);
       .px2rem(height, 48);
       .px2rem(top, -12);
       position: relative;
   }
</style>