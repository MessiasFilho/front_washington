<template>
  <div class="w-full h-full flex flex-col ">
    <div class="relative  ">
        <div class="relative pb-1 ">
            <img class="xl:h-[28rem] xl:w-[100rem] " src="../assets/image/tumbrl.jpg" alt="root">
            <div class="h-20 absolute bg-gradient-to-b from-transparent to-[var(--gradient)] filter blur-[1px] w-full bottom-0"></div>  
        </div>
      </div>
        <div class="flex flex-col  rounded-md items-center  p-1  font-bold bg-white bg-opacity-5 backdrop-blur-sm  shadow-lg">
          <span class="text-lg ">
            Bem-vindos
          </span>
          <span class="text-sm text-red-600">
            Empresarial Washington Soares
          </span>
        </div>
        <div class="p-2">
          <span class="text-sm flex  p-1">
              Situado na Av Whashington Soares 855, o edifício proporciona fácil acesso aos principais pontos da cidade, incluindo áreas de negócios, hotéis e transportes públicos.
            </span>
        </div>
      <div class=" flex overflow-x-auto w-full px-2 ">
          <div @click="openMeeting()" class="p-2 rounded-lg shadow-2xl  bg-[var(--card-color)] border cursor-pointer active:scale-95">
                <div class="hover:scale-105 flex flex-col items-center">
                  <div class=" flex justify-center items-center ">
                    <img class="rounded-md w-32" src="../assets/image/reunia.jpeg" alt="reuniao">
                  </div>
                      <span class=" text-sm">Marcar Reunião</span>
                </div>
            </div>
        </div>
       <div class="p-2">
        <span>Noticias</span>
          <div>
            queda de energia 
          </div>
       </div>
    
      <div class="w-full  p-2">  
          <span>Salas disponiveis </span>
          <div class="flex items-center overflow-x-auto snap-x space-x-3">
            <div v-for="i in 10">
              <div class="w-64 max-sm:w-48 hover:scale-95 transition-all bg-[var(--card-color)] shadow-2xl border p-1 flex justify-center flex-col rounded-md">
              <div class="w-full  flex items-center justify-center">
                <img class=" rounded-md" src="../assets/image/office1.jpg" alt="tumbrl">  
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"/></svg> -->
              </div>
                <div class="w-full h-full flex items-center justify-center max-xl:text-xs">
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


const img = ref(
  {image:''}
)

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