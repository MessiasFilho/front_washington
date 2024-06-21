<template>
  <div class="w-full h-full flex flex-col ">
    <div class="relative  ">
        <div class="relative pb-1 flex justify-center ">
            <img class="xl:h-[28rem] xl:w-[100rem] " src="../assets/image/tumbrl.jpg" alt="root">
            <div class="h-20 absolute bg-gradient-to-b from-transparent to-[var(--gradient)] filter blur-[1px] w-full bottom-0"></div>  
        </div>
      </div>
        <div class="flex flex-col items-center  p-1  font-bold bg-[var(--color-button)]">
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
        <div v-if="verifUser">
          <div class=" flex overflow-x-auto w-full px-2 ">
              <div @click="openMeeting()" class="py-2 hover:scale-95 rounded-lg shadow-xl bg-[var(--color-button)] cursor-pointer active:scale-95">
                    <div class="flex items-center ">
                      <div class=" p-1 rounded-full shadow-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m14-6h-8V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h4.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3V21a1 1 0 0 0 2 0v-1.59l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L14.41 18H19a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1m-1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h16ZM7 14h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2"/></svg>
                      </div>
                          <span class=" px-2 font-semibold text-sm">Marcar Reunião</span>
                    </div>
                </div>
            </div>
        </div>
       <div class="p-2 flex flex-col">
        <div class="w-full shadow-2xl bg-[var(--color-button)] border rounded-lg  h-full flex flex-col items-center justify-center">
         <div class="bg-red-500 w-full flex justify-center rounded-t-md "><span>Noticias</span></div>
            <div class="flex flex-col justify-center items-center">
              <span class="p-1">Title</span>
              <div>
                <img src="/assets/image/reuniao.webp" alt="noticia">
              </div>
              <div class="p-2 w-full ">
                <span>descrição</span>
              </div>
            </div>
        </div>

           <div class="w-full active:scale-95 bg-[var(--color-button)] border mt-3 p-1 flex justify-center items-center  ">
           <span>Sereviços</span>
           </div>
       </div>
    
      <div class="w-full  p-2">  
          <span>Salas disponiveis </span>
          <div class="flex items-center overflow-x-auto snap-x space-x-3">
            <div v-for=" poster in usePoster().posters " key="">
              <RoomsCard :id="poster.id" :title="String(poster.title)"  :description="String(poster.description)" :valor="poster.aluguel" :img="String(poster.url)"/>
            </div>
        </div>
       
      </div>
    </div>
</template>

<script lang="ts" setup>

definePageMeta({
   name: 'index'
})

const use_modal = useModal()
const use_user =  userModal()
const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv0Er9beNEerN6Dul44ynAkc3rInYYDJecRZgpUQYGw&s'

const image = ref<string | null>()

const onFileChange = (e: Event) =>{
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      image.value = (e.target as FileReader).result as string
    }
    reader.readAsDataURL(file)
  }
}

const verifUser = computed(() => { 
  return use_user.loged.role === 'users' || use_user.loged.role === 'admin'  
})

const openMeeting = () =>{ 
  use_modal.marc = true
}

onMounted( async () =>{

  await  usePoster().showPosters()

  const login = localStorage.getItem('login')
  if (!login) return
  use_user.getuser()
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