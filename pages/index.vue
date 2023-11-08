<template>
  <div class="w-full text-white bg-gray-950 h-full flex flex-col space-y-2">
    <Hero class="font-primary"/>
    <upcoming class="px-10 py-1"/>
    <DiscoverMovies class="px-10"/>
  </div>
</template>

<script setup>
  useSeoMeta({
      title: 'Home',
  })
</script>

<style lang="scss" scoped>

</style>