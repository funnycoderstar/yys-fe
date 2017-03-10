<template>
    <div class="heroAwaken">
        <div class="heroAwaken-info">
            <h1>技能变化</h1>
            <ul>
                <li>
                    <p>攻击</p>
                    <p><span>{{ crit.from }} ~ {{ crit.to }}</span></p>
                </li>
                <li>
                    <p>生命</p>
                    <p><span>{{ speed.from }} ~ {{ speed.to }}</span></p>
                </li>
                <li>
                    <p>防御</p>
                    <p><span>{{ defense.from }} ~ {{ defense.to }}</span></p>
                </li>
                <li>
                    <p>速度</p>
                    <p><span>{{ life.from }} ~ {{ life.to }}</span></p>
                </li>
                <li>
                    <p>暴击</p>
                    <p><span>{{ attack.from }} ~ {{ attack.to }}</span></p>
                </li>
            </ul>
        </div>
        <div class="heroAwaken-info">
            <h1>觉醒材料</h1>
            <ul>
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
        .px2rem(font-size, 25);
        .px2rem(margin, 15);
        .heroAwaken-info {
            .px2rem(border-radius, 10);
            .px2rem(height, 370);
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
                text-align: center;
                .px2rem(line-height, 200);
            }
            ul {
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
    }
</style>