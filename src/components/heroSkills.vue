<template>
    <div class="heroSkills">
        <div class="skill">
            <h1>鬼葫芦</h1>
            <ul>
                <li class="title">消耗:</li>
                <li>0</li>
            </ul>
            <ul>
                <li class="title">效果:</li>
                <li>酒吞童子以妖力操控鬼葫芦向1名敌人喷出瘴气，造成攻击100%的伤害。根据身上的狂气数量进行追击，每一层狂气追加一次攻击。</li>
            </ul>
            <ul>
                <li class="title">升级:</li>
                <li>Lv.2技能伤害额外+5%</li>
                <li>Lv.3技能伤害额外+5%</li>
                <li>Lv.4技能伤害额外+5%</li>
                <li>Lv.5技能伤害额外+10%</li>
            </ul>
        </div>
        <div class="skill">
            <h1>鬼葫芦</h1>
            <ul>
                <li class="title">消耗:</li>
                <li>0</li>
            </ul>
            <ul>
                <li class="title">效果:</li>
                <li>酒吞童子以妖力操控鬼葫芦向1名敌人喷出瘴气，造成攻击100%的伤害。根据身上的狂气数量进行追击，每一层狂气追加一次攻击。</li>
            </ul>
            <ul>
                <li class="title">升级:</li>
                <li>Lv.2技能伤害额外+5%</li>
                <li>Lv.3技能伤害额外+5%</li>
                <li>Lv.4技能伤害额外+5%</li>
                <li>Lv.5技能伤害额外+10%</li>
            </ul>
        </div>
        <div class="skill">
            <h1>鬼葫芦</h1>
            <ul>
                <li class="title">消耗:</li>
                <li>0</li>
            </ul>
            <ul>
                <li class="title">效果:</li>
                <li>酒吞童子以妖力操控鬼葫芦向1名敌人喷出瘴气，造成攻击100%的伤害。根据身上的狂气数量进行追击，每一层狂气追加一次攻击。</li>
            </ul>
            <ul>
                <li class="title">升级:</li>
                <li>Lv.2技能伤害额外+5%</li>
                <li>Lv.3技能伤害额外+5%</li>
                <li>Lv.4技能伤害额外+5%</li>
                <li>Lv.5技能伤害额外+10%</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'heroSkills'
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