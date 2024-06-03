<template>
    <Dialog :open="use_modal.marc" >
        <DialogContent  class=" rounded-md">
            <DialogHeader>
                <div class="flex justify-between items-center">
                    <DialogTitle>
                        <span>Marcar Reunião</span>
                    </DialogTitle>
                    <div @click="use_modal.marc = false" class="cursor-pointer active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
                    </div>
                </div>
                <DialogDescription>
                <div class="h-[300px] flex">
                    <ListSchedule/>
                </div>
                </DialogDescription>
            </DialogHeader>
                <div class="w-full">
                </div>
                <div class="text-black space-x-2 flex items-center justify-center">
                    <input v-model="data" type="datetime-local">
                </div>
            <DialogFooter class="flex items-center">
                <button @click="clickConfirm()" class="w-max active:scale-95 text-white px-2 bg-green-600 uppercase rounded-md">confirmar</button>
            </DialogFooter>
        </DialogContent>
  </Dialog>
</template>*

<script lang="ts" setup>
const use_modal = useModal()
const use_agenda = useAgenda()
const data = ref()

const clickConfirm = () => {
   if (!data.value){
        return alert('sem data ')
   }
   use_agenda.createAgenda(data.value)
    
}
</script>

<style>

</style>