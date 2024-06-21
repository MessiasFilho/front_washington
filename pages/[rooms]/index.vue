<template>
    <div class="h-screen w-full flex flex-col items-center p-2 ">
        <div class="max-sm:w-[20.9rem] max-sm:h-64 max-w-[78rem] max-h-[30rem]  flex items-center justify-center">
            <Carousel class=" flex justify-center items-center">
            <CarouselContent class="">
                <CarouselItem v-for="img in usePoster().imgens "class="max-w-[78rem] max-h-[30rem] flex justify-center items-center ">
                    <div class="flex justify-center items-center" >
                        <img class="rounded-md max-sm:w-[20rem] max-sm:h-64" :src="img.url" alt="">
                    </div>    
                
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class=" h-full border-none rounded-none"/>
            <CarouselNext class=" h-full border-none rounded-none"/>
            </Carousel>
        </div>
        <div class="w-full bg-[var(--color-button)] mt-4 p-2 border rounded-md shadow-2xl">
            <div class="w-full p-2 flex justify-center border-b">
                <span>{{ use_poster.poster.title }}</span>
            </div>
            <div class=" flex justify-center items-center">
                <div class="text-[0.8rem] flex flex-col w-full gap-2 py-1 ">
                    <div class="flex ">
                        <span class="">Andar: {{ use_poster.poster.andar }}</span>
                    </div>  
                     <div class="flex ">
                        <span class="">Sala: {{ use_poster.poster.sala }}</span>
                    </div>
                    <div class="flex ">
                        <span class="">Metros: {{ use_poster.poster.metros }}</span>
                    </div>
                    <div class="flex ">
                        <span class="">Aluguel: ${{ use_poster.poster.aluguel }}</span>
                    </div>
                    <div class="flex ">
                        <span class=""> Venda: ${{ use_poster.poster.venda }}</span>
                    </div>
                    <div class="flex ">
                        <span class=" whitespace-nowrap">Contato: {{ use_poster.poster.telefone }}</span>
                     </div>  
                </div>
            </div>
            <div class="py-2 border-t">
                <span>{{ use_poster.poster.description }}</span>
            </div>
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