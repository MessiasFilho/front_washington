<template>
    <div>
        <Sheet :open="useModal().leftMenu">
            
            <SheetContent>
                <SheetHeader class="w-full h-full">
                    <button @click="useModal().leftMenu = false" class="flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                    </button>
                    <SheetTitle>Adiministração</SheetTitle>
                    <div class="w-full h-full  ">
                        <div class="flex flex-col space-y-2 p-1">
                            <button @click="navigatePage('editclients')" class=" border bg-[var(--color-button)] rounded-lg shadow-md active:scale-95 p-1">Clientes</button>
                            <button class=" border bg-[var(--color-button)] rounded-lg shadow-md active:scale-95 p-1">Agendas </button>
                            <button class=" border bg-[var(--color-button)] rounded-lg shadow-md active:scale-95 p-1">Anuncio</button>
                            <button class=" border bg-[var(--color-button)] rounded-lg shadow-md active:scale-95 p-1">Salas Disponives</button>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
</template>

<script setup lang="ts">

const use_modal = useModal()

const navigatePage = (page: string) =>{
    navigateTo({
        name: page
    })
    use_modal.leftMenu = false

}


</script>


<style lang="scss" scoped>
</style>