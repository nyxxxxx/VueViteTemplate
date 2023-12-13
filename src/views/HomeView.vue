<template>
  <hello-world></hello-world>
  <h1>Home {{ test }}</h1>
  <Button label="button"  />
</template>

<script setup>
const test = ref('hi')
onMounted(()=>{
  hello2();
})
</script>

<style scoped>
</style>