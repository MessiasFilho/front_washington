<template>
     <div @click="openPage()" class="w-64 max-sm:w-48 mb-2 hover:scale-95 transition-all bg-[var(--card-color)] shadow-2xl border p-1 flex justify-center flex-col rounded-md bg-white bg-opacity-5 backdrop-blur-sm">
                  <div class="w-full  flex items-center justify-center">
                    <img class=" rounded-md" :src="props.img" alt="tumbrl">  
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"/></svg> -->
                  </div>
                    <div class="w-full h-full flex items-center justify-center max-xl:text-xs">
                      <span class="whitespace-nowrapte">Empresarial Whashington Soares  </span>
                      <span>{{ title }}</span>
                </div>
                <code>{{ id }}</code>
              </div>
              <!-- <code>{{ props.img }}</code> -->
</template>
<script setup>

 const props = defineProps({
    id: {
      default: '', 
        type: Number
    },

    title:{
        default: '', 
        type: String
    }, 
    img: {
        default: '', 
        type: String
    }
 })

 const openPage = () =>{
    navigateTo({
      name: 'rooms',
      params: {rooms: props.id}
    })
 }

</script>

<style lang="scss" scoped>

</style>