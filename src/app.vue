<script lang="ts" setup>
// 它是Nuxt应用程序的主要组件。您添加到其中的任何内容（JS和CSS）都将是全局的，并包含在每个页面中。app.vue
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style lang="scss">
@each $size in $fontSizeArr {
  .font-#{$size} {
    font-size: $size + px !important;
  }
}

button{
  outline:none;
}

</style>
