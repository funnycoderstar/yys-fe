<template>
  <div>
      test2
      {{testInfo2}}
  </div>
</template>

<script>
    export default {
        data() {
            return {
                testInfo2: '',
            }
        },  
        activated() {
            console.log('测试2被激活');
        },
        deactivated() {
            console.log('测试2被缓存');
        },
        created() {
            setTimeout(() => {
                this.testInfo2 = '这是测试二的数据';
            }, 2000);
        },
    }
</script>