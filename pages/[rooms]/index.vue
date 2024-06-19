<template>
    <div class="h-screen w-full flex flex-col items-center ">
        <div class="w-72 h-60 border">
            <Carousel class="border h-full flex justify-center items-center">
            <CarouselContent class="h-full">
                <CarouselItem class="border w-full ">
                    <img src="/assets/image/office1.jpg" alt="">
                </CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="rounded-none h-full"/>
            <CarouselNext class="rounded-none h-full"/>
            </Carousel>
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