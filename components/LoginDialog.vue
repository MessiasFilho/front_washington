<template>
   <Dialog :open="use_modal.login" >
        <DialogContent  class="rounded-md">
            <DialogHeader>
                <div class="flex justify-between items-center">
                    <DialogTitle>
                        <span>Login</span>
                    </DialogTitle>
                    <div @click="navigatePage('index')" class="cursor-pointer active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
                    </div>
                </div>
                <DialogDescription>
                    
                </DialogDescription>
            </DialogHeader>
            <div  class="space-y-2 flex items-center justify-center flex-col">
                <div class="flex flex-col w-full">
                    <label for="name" >Email</label>
                    <input id="name" class="outline-none text-black rounded-sm px-2" type="text">
                </div>
                <div class="flex flex-col w-full">
                    <label for="email">Senha</label>
                    <input  id="email" class="outline-none text-black rounded-sm px-2" type="text">
                </div>
            </div>
              
            <DialogFooter>
                <div class="flex w-full justify-end space-x-3">
                    <button @click="navigatePage('index')"  class="w-max active:scale-95 text-white px-2 bg-red-600 uppercase rounded-md">cancelar</button>
                    <button class="w-max active:scale-95 text-white px-2 bg-green-600 uppercase rounded-md">Login</button>
                </div>     
            </DialogFooter>
        </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup>
const use_modal = useModal()

const navigatePage = (page: string) =>{
    return navigateTo({
        name: page
    })
}
</script>

<style>

</style>