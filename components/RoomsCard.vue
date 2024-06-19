<template>
     <div @click="openPage()" class="mb-2 h-[22rem] hover:scale-95 transition-all bg-[var(--color-button)] shadow-2xl border p-1 flex justify-center items-center flex-col rounded-md ">
                  <div class="flex w-60 h-40 items-center justify-center ">
                    <img class=" w-full h-40 flex rounded-md justify-center" :src="props.img" alt="tumbrl">  
                  </div>
                    <div class="w-full   flex max-xl:text-xs">
                      <span class="whitespace-nowrapte text-[.955rem]"> {{ props.title }}</span>
                  </div>
                  <div class="my-1 w-full  h-full">
                    <p class="text-xs ">{{ props.description }}</p>
                  </div>
                  <div class="w-full">
                    <p class="text-[.85rem]">${{ props.valor }}</p>
                  </div>
                   
                  <div class=" flex space-x-2 w-full mt-2 items-center border-t-2 border-slate-600 pt-2">                    
                      <img class="w-10 rounded-full" src="../assets/image/Logo.jpeg" alt="">
                     <span class="text-[.8rem]">Empresarial Washington Soares</span>
                  </div>
              </div>
            
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
    }, 

    description: {
        default: '', 
        type: String
      }, 

    valor: {
        default: '', 
        type: Number
    }, 


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