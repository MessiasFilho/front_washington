<template>
    <div class="h-screen w-screen flex flex-col items-center p-2 ">
        <div class="max-sm:w-[20.9rem] max-sm:h-64 max-w-[78rem] max-h-[30rem]  flex items-center justify-center">
            <Carousel class=" flex justify-center items-center">
            <CarouselContent class="">
                <CarouselItem v-for="img in usePoster().imgens "class="max-w-[78rem] max-h-[30rem] flex justify-center items-center ">
                    <div >
                        <img class="rounded-md" :src="img.url" alt="">
                    </div>    
                
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class=" h-full border-none"/>
            <CarouselNext class=" h-full border-none"/>
            </Carousel>
        </div>
        <div class="w-full  my-2 p-2 ">
            <div class="w-full p-2 flex justify-center">
                <span>{{ use_poster.poster.title }}</span>
            </div>
            <div class=" flex justify-center items-center">
                <div class="text-[0.8rem] grid grid-cols-2  w-full">
                    <div class="flex border">
                        <span class="">Andar: </span>
                    </div>  
                    <div class="flex ">
                        <span class="">{{ use_poster.poster.andar }}</span>
                    </div>

                    <!-- <div class="flex ">
                        <span class="">Sala: {{ use_poster.poster.sala }}</span>
                    </div>
                    <div class="flex ">
                        <span class="">Aluguel: {{ use_poster.poster.aluguel }}</span>
                    </div>
                    <div class="flex ">
                        <span class=""> Venda: {{ use_poster.poster.venda }}</span>
                    </div>
                    <div class="flex ">
                        <span class=" whitespace-nowrap">Contato: {{ use_poster.poster.telefone }}</span>
                        -->
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <div class="">
            <span>{{ use_poster.poster.description }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute(); 
const use_poster = usePoster()
const {rooms} = route.params

definePageMeta({
    name:'rooms', 
})

onMounted(async () =>{
    await usePoster().getImagens(Number(rooms))
    await usePoster().posterImagens(Number(rooms))

})

</script>

<style scoped>
   
</style>