<template>
  <MeetingCard/>
  <div class="w-full flex flex-col items-center relative ">
    <header class="w-full flex items-center flex-col z-10">
       <div class="w-full h-16 flex items-center p-2 ">
          <div class="flex items-center justify-between w-full">
            <img class="w-11 h-11 rounded-full" src="../assets/image/Logoheader.jpeg" alt="logo">
            <div class="space-x-2">
              <button class="hover:underline hover:text-red-500 p-1 text-sm">Entre em contato</button>
              <button @click="navigatePage('register')" class="hover:underline text-sm hover:text-red-500 p-1 ">Cadastrar-se</button>
              <button @click="navigatePage('login')" class="hover:underline hover:text-red-500 p-1 text-sm">Entrar</button>
            </div>
          </div>
       </div>
      </header>

      <div class=" mb-3 w-full relative">
        
          <div class="">
            <slot/>
          </div>
        
       
      </div>
      <footer class="absolute bottom-0"> teste</footer>
  </div>
</template>l

<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';

const color = useColorMode()
color.value = 'dark'
const navigatePage = (page: string) =>{ 
  return navigateTo({
    name: page
  })
}
</script>

<style>

</style>
<!-- https://r4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-d98038ede1ba3dfb264758af0061862d.jpg -->