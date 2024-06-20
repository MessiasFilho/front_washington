<template>
    <div class="h-screen w-screen flex flex-col items-center p-2 ">
        <div class="max-sm:w-[20.9rem] max-sm:h-64 max-w-[78rem] max-h-[30rem]  flex items-center justify-center">
            <Carousel class=" flex justify-center items-center">
            <CarouselContent class="">
                <CarouselItem class="max-w-[78rem] max-h-[30rem] flex justify-center items-center ">
                    <div >
                        <img class="rounded-md" src="/assets/image/office1.jpg" alt="">
                    </div>    
                
                </CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious class=" h-full border-none"/>
            <CarouselNext class=" h-full border-none"/>
            </Carousel>
        </div>
        <div class="w-full h-full my-2 border">
            <div class="grid grid-cols-2">  
                
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const route = useRoute(); 

const {rooms} = route.params

console.log(rooms);

definePageMeta({
    name:'rooms', 
})



</script>

<style scoped>
   
</style>