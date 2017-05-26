<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };

</script>

<style lang="less">
@import './util.less';
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
    }
    body,
    html,
    #app {
        width: 100%;
        height: 100%;
        // font-family: "HiraginoSansGB-w3", Arial, Verdana, 微软雅黑, 黑体, serif;
    }
    
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }
    
    div,
    a,
    img {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
    }
    
    input {
        -webkit-appearance: none;
    }
    
    .fix-float {
        &::after {
            content: ' ';
            display: block;
            clear: both;
        }
    }
    .com-page-wrap {
        .px2rem(padding-top, 80);
    }
    .com-page-wrap1 {
        .px2rem(padding-top, 0);
    }
</style>
