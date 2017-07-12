<template>
    <div class="wrap">
        <Dialog :is-show="show" :message="message" @hide="hideDialog"></Dialog>
        <button @click="showDialog">显示弹框</button>
    </div>
</template>
<script>
import Dialog from './dialog.vue';
export default {
    components: { Dialog },
    data() {
        return {
            show: false,
            message: '这是信息'
        }
    },
    methods: {
        showDialog() {
            this.show = true;
        },
        hideDialog() {
            this.show = false;
            console.log('hide');
        }
    }
}
</script>