<template>
  <div class="test1">
      test1
      {{testInfo1}}
  </div>
</template>

<script>
    export default {
        data() {
            return {
                testInfo1: '',
            };
        },
        activated() {
            console.log('测试1被激活');
        },
        deactivated() {
            console.log('测试1被缓存');
        },
        created() {
            setTimeout(() => {
                this.testInfo1 = '这是测试一的数据';
            }, 2000);
        },
    }
</script>

