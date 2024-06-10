<template>
    <div class="h-screen w-full p-3">
       
<Select v-model:model-value="pessoa">
            <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Fisica" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <!-- <SelectLabel>Pessoa</SelectLabel> -->
                    <SelectItem  value="Fisica" >
                        Fisica
                    </SelectItem> 
                    <SelectItem value="Juridica">
                        Juridica
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        
            <template v-if="pessoa == 'Fisica'">
                    <div  class="space-y-2 flex items-center justify-center flex-col">
                        <div class="flex flex-col w-full">
                            <label for="name" >Nome</label>
                            <input v-model="use_user.user.name"  id="name" class="outline-none text-black  px-2" type="text">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="email">G-mail</label>
                            <input v-model="use_user.user.email" id="email" class="outline-none text-black  px-2" type="text">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="cpf">CPF</label>
                            <input v-model="use_user.user.cpf" id="cpf" class="outline-none text-black  px-2" type="text">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="telefone">telefone</label>
                            <input v-model="use_user.user.fone" id="telefone" class="outline-none text-black  px-2" type="tel">
                        </div>
                        
                    </div>
                </template>

                <template v-if="pessoa == 'Juridica'">
                    <div  class="space-y-2 flex items-center justify-center flex-col">
                        <div class="flex flex-col w-full">
                            <label for="name" >Nome</label>
                            <input v-model="use_user.user.name" id="name" class="outline-none text-black  px-2" type="text">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="email">G-mail</label>
                            <input v-model="use_user.user.email" id="email" class="outline-none text-black  px-2" type="text">
                        </div>
                        
                        <div  class="flex flex-col w-full">
                            <label for="cnpj">CNPJ</label>
                            <input v-model="use_user.user.cnpj" id="cnpj" class="outline-none text-black  px-2" type="text">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="telefone">telefone</label>
                            <input v-model="use_user.user.fone" id="telefone" class="outline-none text-black  px-2" type="tel">
                        </div>
                    </div>
                </template>
                <button @click="clickUpdateUser()" class="p-2 bg-red-400">Click</button>
    </div>
</template>

<script setup lang="ts">
import type { updateUser } from '~/stores/users';

const route = useRoute()
const {updated} = route.params
definePageMeta({
    name: 'updated'
})

const pessoa = ref('Fisica')

const use_user = userModal()

const user = ref<updateUser>({ 
    name:'', 
    email: '', 
    fone: '',
    pessoa: '',
    cpf: '', 
    cnpj:'',
})

onMounted(()=>{
    userModal().showById(Number(updated))
})

const clickUpdateUser = () =>{
   user.value = {
        name: use_user.user.name, 
        pessoa: use_user.user.pessoa, 
        cnpj: use_user.user.cnpj, 
        cpf: use_user.user.cpf, 
        email: use_user.user.email, 
        fone: use_user.user.fone
    }
    
    use_user.updateUser(Number(updated), user.value )    
}



</script>

<style scoped>

</style>