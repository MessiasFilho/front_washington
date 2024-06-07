<template>
  <div class="w-full h-full flex flex-col ">
    <div class="relative  ">
        <div class="relative pb-1 flex justify-center ">
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
        <div v-if="verifUser">
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
        </div>
       <div class="p-2 flex flex-col">
         <span>Noticias</span>
          <div v-if="image">
            <img :src="image" alt="selected">
          </div>
          <label for="imgge"> adicionar imagem</label>
          <input class="hidden" id="imgge" type="file" @change="onFileChange" >
          <div>
            queda de energia 
          </div>
       </div>
    
      <div class="w-full  p-2">  
          <span>Salas disponiveis </span>
          <div class="flex items-center overflow-x-auto snap-x space-x-3">
            <div v-for="i in 10">
              <RoomsCard :id="i" :img="img"/>
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