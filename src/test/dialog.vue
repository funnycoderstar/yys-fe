<template>
    <div class="dialog" v-show="isShow">
        <p>{{message}}</p>
        <p>{{newMessage}}</p>
        <button @click="toHide">关闭弹框</button>
    </div>
</template>
<script>
export default {
    // 驼峰式命名的 prop 需要转换为相对应的短横线隔开式 is-show
    props: ['isShow', 'message'],
    data() {
        return {
            // newMessage: null,
        }
    },
    // created() {
    //     this.newMessage = this.newMessage
    // },
    computed: {
        newMessage() {
            return this.message + ' 哈哈哈';
        }
    },
    methods: {
        toHide() {
            // $emit 方法触发父组件的监听事件
            this.$emit('hide');
        }
    }
}
</script>

<style lang="less">

</style>
