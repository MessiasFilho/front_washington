<template>
  <NuxtLayout>
    <NuxtPage/>
    <Toaster position="top-center"  />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { $toast } = useNuxtApp()
// onMounted( () => {
  // useSwal().fire({
  
  // })
// })

</script>
