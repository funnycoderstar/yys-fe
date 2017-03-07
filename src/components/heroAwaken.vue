<template>
    <div class="heroAwaken">
        <div class="heroAwaken-info">
            <h1>技能变化</h1>
            <ul>
                <li>
                    <p>A->S</p>
                    <p>1000</p>
                </li>
                <li>
                    <p>A->S</p>
                    <p>1000</p>
                </li>
                <li>
                    <p>A->S</p>
                    <p>1000</p>
                </li>
                <li>
                    <p>A->S</p>
                    <p>1000</p>
                </li>
                <li>
                    <p>A->S</p>
                    <p>1000</p>
                </li>
            </ul>
        </div>
        <div class="heroAwaken-info">
            <h1>觉醒材料</h1>
            <ul>
                <li>
                    <p>天雷鼓-中级</p>
                    <p>10</p>
                </li>
                <li>
                    <p>天雷鼓-中级</p>
                    <p>10</p>
                </li>
                <li>
                    <p>天雷鼓-中级</p>
                    <p>10</p>
                </li>
                <li>
                    <p>天雷鼓-中级</p>
                    <p>10</p>
                </li>
            </ul>
        </div>
        <div class="heroAwaken-info">
            <h1>觉醒技能</h1>
            <div class="heroSkill">觉醒技能觉醒技能觉醒技能觉醒技能</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'heroAwaken'
    };
</script>

<style lang="less">
@import '../util.less';
    .heroAwaken {
        .px2rem(font-size, 25);
        .px2rem(padding, 15);
        .heroAwaken-info{
            background:url("../assets/bg1.jpg") center center no-repeat;
            background-size:100% 100%;
            color:#fff;
            .px2rem(height, 370);
            h1{
                text-align: center;
                .px2rem(padding, 15);
                .px2rem(font-size, 35);
            }
            .heroSkill{
                text-align: center;
                .px2rem(line-height, 200);
            }
            ul{
                text-align: center;
                overflow: hidden;
                li{
                    display:flex;
                    align-content: space-around;
                    p{
                        width: 50%;
                        .px2rem(line-height, 50);
                        text-align: center;
                    }
                }
            }
        }
    }
</style>