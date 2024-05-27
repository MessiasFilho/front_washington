<template>
    <div>

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