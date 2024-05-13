<template>
  <div class="w-full h-full flex flex-col p-3">
      <div class="flex items-center overflow-x-auto snap-x space-x-3">
          <div @click="openMeeting()" class="p-2 bg-slate-500 rounded-lg cursor-pointer active:scale-95">
               <div class="hover:scale-105">
                  <div class=" flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 28 28"><path fill="currentColor" d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6"/></svg>
                  </div>
                      <span class=" text-sm">Marcar Reunião</span>
                </div>
            </div>
        </div>
      <div>
        <span>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem quidem, vitae architecto, possimus ullam nihil consequuntur ipsa at aperiam quibusdam, sunt reprehenderit! Tempore ad alias distinctio doloribus corrupti quaerat!
        </span>
      </div>
      <div class="w-full">  
        <span>Salas disponiveis </span>
        <div class="flex items-center overflow-x-auto snap-x space-x-3">
          <div v-for="i in 10">
            <div class="w-64 max-sm:w-48 bg-slate-600 p-2 flex justify-center flex-col rounded-md">
             <div class="w-full max-h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"/></svg>
             </div>
             <div class="w-full ">
               <span class="whitespace-nowrapte">Empresarial Whashington Soares  </span>
             </div>
            </div>

          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
const use_modal = useModal()
const openMeeting = () =>{ 
  use_modal.marc = true
}
definePageMeta({
   name: 'index'
})
</script>

<style scoped>

::-webkit-scrollbar {
    width: 20px; /* Largura da barra de rolagem */
    height: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #df191900; /* Cor de fundo da pista */
    
  }
  
  ::-webkit-scrollbar-thumb {
    background: #88888894; /* Cor da alça da barra de rolagem */
    border-radius: 10px;

  
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Cor da alça da barra de rolagem ao passar o mouse */
  }

</style>