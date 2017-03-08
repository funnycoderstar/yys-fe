<template>
    <div class="heroSkills">
        <div class="skill">
            <h1>{{ name }}</h1>
            <ul>
                <li class="title">消耗:</li>
                <li>{{ Consumption }}</li>
            </ul>
            <ul>
                <li class="title">效果:</li>
                <li>{{ effect }}</li>
            </ul>
            <ul>
                <li class="title">升级:</li>
                <li v-for="item in upgrade">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'heroSkills',
        props: {
            upgrade: {
                type: Array
            },
            effect: {
                type: String
            },
            Consumption: {
                type: Number
            },
            name: {
                type: String
            }
        }
    };
</script>

<style lang="less">
@import '../util.less';
.heroSkills{
    .px2rem(font-size, 25);
     background-color: #f5f5f5;
    .skill{
        .px2rem(margin, 15);
        .px2rem(padding, 15);
        background:url("../assets/bg3.jpg") center center no-repeat;
        background-size:100% 100%;
        color:#fff;
        h1{
            text-align: center;
            .px2rem(padding, 10);
            .px2rem(font-size, 35);
        }
        ul{
           .px2rem(margin-bottom, 15); 
           .title{
               .px2rem(font-size, 35);
               .px2rem(text-indent, 0);
           }
           li{
               .px2rem(text-indent, 35);
               .px2rem(line-height, 40);
           } 
        }
    }
}
</style>