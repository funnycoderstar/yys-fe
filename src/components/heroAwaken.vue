<template>
    <div class="heroAwaken">
        <div class="heroAwaken-info">
            <h1>技能变化</h1>
            <ul class="flexWrap">
                <li>
                    <p>攻击</p>
                    <p><span>{{ attack.from }} ~ {{ attack.to }}</span></p>
                </li>
                <li>
                    <p>生命</p>
                    <p><span>{{ life.from }} ~ {{ life.to }}</span></p>
                </li>
                <li>
                    <p>防御</p>
                    <p><span>{{ defense.from }} ~ {{ defense.to }}</span></p>
                </li>
                <li>
                    <p>速度</p>
                    <p><span>{{ speed.from }} ~ {{ speed.to }}</span></p>
                </li>
                <li>
                    <p>暴击</p>
                    <p><span>{{ crit.from }} ~ {{ crit.to }}</span></p>
                </li>
            </ul>
        </div>
        <div class="heroAwaken-info">
            <h1>觉醒材料</h1>
            <ul class="flexWrap">
                <li v-for="item in material">
                    <p>{{ item.name }}</p>
                    <p><span>{{ item.count }}</span></p>
                </li>
            </ul>
        </div>
        <div class="heroAwaken-info">
            <h1>觉醒技能</h1>
            <div class="heroSkill"><span>{{ skill }}</span></div>
        </div>
        <div class="defenseMatch heroAwaken-info">
            <h1>御魂搭配</h1>
            <ul>
                <li><span>搭配方案：</span>镇墓兽4件套+暴击2件</li>
                <li><span>搭配点评：</span>黑童子是血量越少，伤害越高的高爆发式神，配合镇墓兽在低血量的暴击伤害加成，效果更佳。</li>
                <li>
                    <p><span>御魂位置：</span></p>
                    <p>2号位：攻击加成</p>
                    <p>4号位：攻击加成</p>
                    <p>6号位：暴击</p>
                </li>
            </ul>
        </div>
        <div class="heroMatch heroAwaken-info">
            <h1>搭配阵容</h1>
            <ul class="match">
                <li class="matchImg">
                    <img src='../assets/matchhei.jpg' />
                </li>
                <li><span>搭配方案：</span>神乐+黑童子、惠比寿、蝴蝶精、独眼小僧、兵俑。</li>
                <li><span>阵容点评：</span>阵容思路是，黑童子+惠比寿+独眼小僧3薙魂体系，薙魂可以触发黑童子的被动反击，独眼的被动加抵抗和反伤，惠比寿的被动回火。蝴蝶精只要奶就够了，推荐树妖，兵俑带返魂香，控制的时候，挨打了还能概率触发眩晕</li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'heroAwaken',
        props: {
            skill: {
                type: String
            },
            material: {
                type: Array
            },
            crit: {
                type: Object
            },
            speed: {
                type: Object
            },
            defense: {
                type: Object
            },
            life: {
                type: Object
            },
            attack: {
                type: Object
            }
        }
    };

</script>

<style lang="less">
    @import '../util.less';
    .heroAwaken {
        @mainColor: #3fadf9;
        .px2rem(font-size, 25);
        .px2rem(margin, 15);
        .heroAwaken-info {
            .px2rem(border-radius, 10);
            background-color: #fff;
            span {
                color: #3fadf9;
            }
            h1 {
                text-align: center;
                .px2rem(padding, 15);
                .px2rem(font-size, 35);
            }
            .heroSkill {
                // text-align: center;
                .px2rem(line-height, 50);
                .px2rem(padding, 15);
                .px2rem(text-indent, 50);
            }
            .flexWrap {
                text-align: center;
                overflow: hidden;
                li {
                    display: flex;
                    align-content: space-around;
                    p {
                        width: 50%;
                        .px2rem(line-height, 50);
                        text-align: center;
                    }
                }
            }
        }
      .heroMatch, .defenseMatch {
          .px2rem(line-height, 50);
          .comDis(padding, 0, 20);
          .matchImg {
              text-align: center;
          }
          img {
               .px2rem(width, 600);
          }
      }
    }
</style>