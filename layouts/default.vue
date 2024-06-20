<template>
  <MeetingCard/>
  <MenuAdmin/>
  <UploadImages/>
  <div class="w-full flex flex-col items-center relative">
    <header class="w-full flex items-center flex-col z-10">
       <div class="w-full h-16 flex items-center p-2 ">
          <div class="flex items-center justify-between w-full">
            <img @click="navigatePage('index')" class="w-11 h-11 rounded-full" src="../assets/image/Logoheader.jpeg" alt="logo">
            <div class="space-x-2 flex ">
              <button @click="navigatePage('register')" class="hover:underline text-sm hover:text-red-500 p-1 ">Cadastrar-se</button>
              <button @click="navigatePage('login')" class="hover:underline hover:text-red-500 p-1 text-sm">Entrar</button>
              <div v-if="verifUser">
                <button @click="useModal().leftMenu = true" class="hover:underline hover:text-red-500 p-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
                </button>
              </div>
            </div>
          </div>
       </div>
      </header>
      <div class=" mb-5 w-full relative">
          <div class="bg-[var(--color-body)]">
            <slot/>
          </div>
      </div>
      <footer class="bottom-0">
        
        teste
        <button class="hover:underline hover:text-red-500 p-1 text-sm">Entre em contato</button>
      
      </footer>

  </div>
</template>l
<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
const color = useColorMode()
const use_user = userModal()

color.value = 'dark'
const verifUser = computed(() =>{
   return use_user.loged.role === 'admin'
})


const navigatePage = (page: string) =>{ 
  return navigateTo({
    name: page
  })

  onMounted(async () =>{
   
  })
}


</script>

<style>

</style>
<!-- https://r4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-d98038ede1ba3dfb264758af0061862d.jpg -->