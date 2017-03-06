<template>
    <div class="heroSkills">
        <div class="skill">技能一</div>
        <div class="skill">技能二</div>
        <div class="skill">技能三</div>
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
    .px2rem(padding, 15);
}
</style>