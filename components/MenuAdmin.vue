<template>
    <div>
        <Sheet :open="useModal().leftMenu">
            <SheetContent>
                <div class="w-full h-full flex flex-col">
                    <SheetTitle></SheetTitle>
                    <div class="flex h-20 justify-between">
                        <div >
                            <img class="w-20 rounded-sm" src="../assets/image/Logo.jpeg" alt="">
                        </div>
                        <button  @click="useModal().leftMenu = false" class="flex justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                        </button>
                    </div>
                    <div class="w-full h-full mt-4">
                        <div class="flex flex-col space-y-2 p-1">
                            <button @click="navigatePage('editclients')" class=" flex justify-center space-x-4 items-center border bg-[var(--color-button)]  shadow-md active:scale-95 p-1">
                               <div class="w-[20%]  flex justify-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 640 512"><path fill="currentColor" d="M360 72a40 40 0 1 0-80 0a40 40 0 1 0 80 0M144 208a40 40 0 1 0 0-80a40 40 0 1 0 0 80M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32zm464-208a40 40 0 1 0 0-80a40 40 0 1 0 0 80M200 313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8l26.8-49.9V272c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-54.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l26.8-49.9V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-38.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.6c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.5c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6h-19.5c-32.4 0-62.1 17.8-77.5 46.3l-37.8 70.2c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32z"/></svg>
                               </div>
                               <span class="w-full text-start"> Clientes</span>
                            </button>

                            <button @click="navigatePage('schedule')" class=" flex justify-center space-x-4 items-center border bg-[var(--color-button)]  shadow-md active:scale-95 p-1">
                               <div class="w-[20%]  flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2zm15-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"/></svg>
                            </div>
                               <span class="w-full text-start"> Agendas</span>
                            </button>
                            <button @click="navigatePage('editclients')" class=" flex justify-center space-x-4 items-center border bg-[var(--color-button)]  shadow-md active:scale-95 p-1">
                               <div class="w-[20%]  flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zM11 5h2v6h-2zm0 8h2v2h-2z"/></svg>
                            </div>
                               <span class="w-full text-start"> Anuncios</span>
                            </button>
                            <button @click="navigatePage('poster')" class=" flex justify-center space-x-4 items-center border bg-[var(--color-button)]  shadow-md active:scale-95 p-1">
                               <div class="w-[20%]  flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M440 424V88h-88V13.005L88 58.522V424H16v32h86.9L352 490.358V120h56v336h88v-32Zm-120 29.642l-200-27.586V85.478L320 51Z"/><path fill="currentColor" d="M256 232h32v64h-32z"/></svg>
                            </div>
                               <span class="w-full text-start"> Salas Disponiveis</span>
                            </button>

                        </div>
                    </div>
                    
                </div>
                   
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