<template>
    <div class="flex flex-col items-center justify-center">
        <input type="file" @change="onFileChange" class="mb-4" />
        <button @click="uploadImage" class="px-4 py-2 bg-blue-500 text-white rounded">Upload</button>
        <div v-if="imageUrl" class="mt-4">
        <img :src="imageUrl" alt="Uploaded Image" class="max-w-full h-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">

const imageUrl = ref<string | null>(null)


const onFileChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (files && files[0]) {
    imageUrl.value = URL.createObjectURL(files[0])
    imageStore.setImageFile(files[0])
  }
}

</script>

<style scoped>

</style>