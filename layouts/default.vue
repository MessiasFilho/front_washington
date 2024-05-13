<template>
  <MeetingCard/>
  <div class="w-full h-full flex flex-col items-center">
      <header class="w-full flex items-center flex-col z-10">
       <div class="w-full h-16 flex items-center p-2 ">
          <div class="flex items-center justify-between w-full">
            <img class="w-11 h-11" src="/assets/image/umbrela.png" alt="logo">
            <div class="space-x-2">
              <button class="hover:underline hover:text-red-500 p-1">Entre em contato</button>
              <button @click="navigatePage('register')" class="hover:underline hover:text-red-500 p-1 ">Cadastrar-se</button>
              <button class="hover:underline hover:text-red-500 p-1">Entrar</button>
            </div>
          </div>
       </div>
      </header>
      <div class="relative mb-3">
          <div class="relative ">
            <img class="xl:h-[28rem] xl:w-[100rem] " src="https://r4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-d98038ede1ba3dfb264758af0061862d.jpg" alt="root">
          <div class="h-20 absolute bg-gradient-to-b from-transparent to-[var(--gradient)] filter blur-[1px] w-full bottom-0 "></div>
        </div>
        <div class="absolute top-40 w-full z-10">
          <slot/>

        </div>
      </div>
    </div>
    <footer class="absolute bottom-0 mt-3">
      <span> redes sociais</span>
    </footer>
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