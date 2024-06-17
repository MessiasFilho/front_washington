<template>
    <div class="flex bg-[#030c1a] flex-col items-center justify-center px-2">
      <div v-if="imageUrl == null" class="">
        <div class="">
          <label for="selectfile">
            <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24"><mask id="letsIconsImgLoadBoxDuotoneLine0" width="18" height="18" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z"/></mask><g fill="none"><g mask="url(#letsIconsImgLoadBoxDuotoneLine0)"><path fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12.898 14.788L4.31 5.341A1.041 1.041 0 0 0 3.54 5a2.082 2.082 0 0 1-2.042-2.49l.4-1.995A3.75 3.75 0 0 1 5.573-2.5h8.718c3.86 0 5.791 0 6.969 1.208c1.177 1.208 1.128 3.138 1.029 6.997L22 17l-3.823-3.186a5.491 5.491 0 0 0-.414-.329a2 2 0 0 0-2.783.582c-.06.093-.123.218-.248.468c-.07.142-.106.213-.139.262a1 1 0 0 1-1.49.206a2.92 2.92 0 0 1-.205-.215z"/></g><path stroke="currentColor" stroke-width="1.2" d="M3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-1"/><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="M8 16v-.6h.6v.6zm-4.625 4.468a.6.6 0 1 1-.75-.936zM7.4 21v-5h1.2v5zm.6-4.4H3v-1.2h5zm.375-.132l-5 4l-.75-.936l5-4z"/></g></svg>
          </label>
          <input type="file" id="selectfile" @change="onFileChange" class="mb-4 hidden" />
        </div>
        </div>
        <div v-else-if="imageUrl">
          <label for="other">
            <img  :src="imageUrl" alt="Uploaded Image" class="w-full rounded-lg max-h-80 flex justify-center items-center" />
          </label>
            <input type="file" id="other" @change="onFileChange" class="mb-4 hidden">
        </div>
       <div class="flex my-3 rounded-md p-2 flex-col w-full bg-[#112037] ">
          <span> Title</span>
          <input v-model="inform.title"class="text-black rounded-sm p-1 shadow-md outline-none" type="text">
          <span> Metros</span>
          <input v-model="inform.metros" class="text-black rounded-sm p-1 shadow-md outline-none" type="text">
          <span> Aluguel</span>
          <input v-model="inform.aluguel" class="text-black rounded-sm p-1 shadow-md outline-none" type="text">
          <span> Venda</span>
          <input v-model="inform.venda" class="text-black rounded-sm p-1 shadow-md outline-none" type="text">
          <span> Andar</span>
          <input v-model="inform.andar" class="text-black rounded-sm p-1 shadow-md outline-none" type="text">
          <span> Sala</span>
          <input v-model="inform.sala" class="text-black rounded-sm p-1 shadow-md outline-none" type="text">
          <span> Telefone</span>
          <input v-model="inform.telefone" class="text-black rounded-sm p-1 shadow-md outline-none" type="tel">
          <span> Descrição</span>
          <textarea v-model="inform.descricao" class="outline-none text-black rounded-sm p-1 shadow-md h-20"></textarea>       
          <button @click="clickSelect()" class="p-1 space-x-3 flex justify-center items-center bg-green-600 mt-3 rounded-xl active:scale-95">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M7 7c0-.89 0-1.335-.268-1.623a1.07 1.07 0 0 0-.285-.213c-.351-.176-.742-.061-1.522.168C3.417 5.774 2.5 6.359 2.5 7s.917 1.226 2.425 1.668c.78.23 1.17.344 1.522.168c.1-.05.21-.131.285-.213C7 8.335 7 7.89 7 7m10 0c0 .89 0 1.335.268 1.623c.076.082.185.163.285.213c.351.176.742.061 1.522-.168C20.583 8.226 21.5 7.641 21.5 7s-.917-1.226-2.425-1.668c-.78-.23-1.17-.344-1.522-.168c-.1.05-.21.131-.285.213C17 5.665 17 6.11 17 7" clip-rule="evenodd"/><path fill="currentColor" fill-opacity="0.25" d="M5.96 15.316L3.5 18l4.466 1.218c.516.14.774.211 1.039.247c.264.035.531.035 1.066.035h4.05c.44 0 .659 0 .876-.024c.218-.024.432-.071.86-.166l3.643-.81l-1.122-1.87c-.418-.696-.626-1.044-.861-1.25a2 2 0 0 0-2.35-.21c-.269.16-.536.466-1.07 1.077c-.247.282-.37.422-.497.501a1 1 0 0 1-1.13-.05c-.119-.09-.23-.242-.45-.545l-.374-.515c-1.11-1.526-1.665-2.29-2.429-2.444a2 2 0 0 0-.568-.032c-.776.067-1.413.763-2.688 2.154"/><path stroke="currentColor" d="m3.5 18l2.46-2.684c1.276-1.391 1.913-2.087 2.69-2.154a2 2 0 0 1 .567.032c.764.154 1.319.918 2.429 2.444l.375.515c.22.303.33.455.449.544a1 1 0 0 0 1.13.051c.127-.079.25-.22.497-.501c.534-.61.801-.916 1.07-1.078a2 2 0 0 1 2.35.21c.235.207.443.555.86 1.25L19.5 18.5"/><path stroke="currentColor" stroke-linecap="round" d="M6.5 9V5m11 4V5m-15 12V7m19 0v10M17.507 4.963c1.64.307 2.868.743 3.505 1.246c.637.502.65 1.045.04 1.55c-.611.505-1.816.945-3.44 1.258c-1.624.313-3.584.482-5.597.483c-2.013 0-3.975-.167-5.602-.478c-1.628-.312-2.838-.751-3.455-1.255c-.618-.505-.61-1.047.02-1.55c.631-.504 1.853-.94 3.49-1.25"/><path stroke="currentColor" d="M21.5 17c0 .663-1 1.299-2.782 1.768c-1.782.469-4.198.732-6.718.732c-2.52 0-4.936-.263-6.718-.732C3.501 18.298 2.5 17.663 2.5 17"/></g></svg>
              </div>
              <span>imagens para pagina</span> 
              <div class="" v-if="usePoster().files.length > 0">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M9.52 3a2 2 0 0 1 1.442.614l.12.137L12.48 5.5H20a2 2 0 0 1 1.995 1.85L22 7.5V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3zm4.955 7.232l-3.536 3.536l-1.414-1.414a1 1 0 1 0-1.414 1.414l2.05 2.05a1.1 1.1 0 0 0 1.556 0l4.172-4.172a1 1 0 0 0-1.414-1.414"/></g></svg>
              </div>
            </button>
      </div> 
       <div class="mb-2 flex w-full  justify-end space-x-3">
         <button @click="" class="active:scale-95 px-4 py-1 bg-red-500 text-white rounded uppercase">Cancelar</button>
         <button @click="clickConfirm()" class="active:scale-95 px-4 py-1 bg-blue-500 text-white rounded uppercase">confirmar</button>
       </div>
    </div>
</template>

<script setup lang="ts">
import type { page } from '~/stores/poster';

definePageMeta({
  name:'poster'
})

const inform = ref<page>({
  aluguel: 0, 
  andar: 0, 
  descricao: '', 
  metros: 0, 
  sala: 0, 
  telefone:'', 
  title:'', 
  venda: 0,
})

const imageUrl = ref<string | null>(null)
const use_modal= useModal()
const use_upload = usePoster()

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (!input.files){
    return
  }
  if (input.files && input.files[0]) {
    imageUrl.value = URL.createObjectURL(input.files[0])
    use_upload.file = input.files[0]
    
  }
}
const clickSelect = () =>{
   usePoster().files.length = 0 
   use_modal.upload = true
}

const clickConfirm = async () =>{
  await use_upload.uploadImagen(inform.value)
  console.log('oi');
  
}
</script>

<style scoped>

</style>