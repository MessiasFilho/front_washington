<template>
    <Dialog :open="use_modal.register">
        <DialogContent>
            <DialogHeader>
                <div class="flex justify-between items-center">
                    <DialogTitle>
                        <span>Cadastre-se</span>
                    </DialogTitle>
                    <div @click="navigatePage('index')" class="cursor-pointer active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
                    </div>
                </div>
                <DialogDescription>
                    <Select v-model:="pessoa"  class="outline-none">
                        <SelectTrigger class="w-[180px]">
                            <SelectValue placeholder='teste' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <!-- <SelectLabel>Pessoa</SelectLabel> -->
                                <SelectItem  value="Fisica" >
                                    Fisica
                                </SelectItem> 
                                <SelectItem value="juridica">
                                    Juridica
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                     </Select>
                </DialogDescription>
            </DialogHeader>
                <div >
                    <div  class="space-y-2 flex items-center justify-center flex-col">
                        <div class="flex flex-col w-full">
                            <label for="name" >Nome</label>
                            <input v-model="user.name" id="name" class="outline-none text-black rounded-sm px-2" type="text">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="email">G-mail</label>
                            <input v-model="user.email" id="email" class="outline-none text-black rounded-sm px-2" type="text">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="email">CPF</label>
                            <input v-model="user.cpf" id="email" class="outline-none text-black rounded-sm px-2" type="text">
                        </div>
                        <template v-if="pessoa !== 'juridica' || null  ">
                            <div  class="flex flex-col w-full">
                                <label for="email">CNPJ</label>
                                <input v-model="user.cpf" id="email" class="outline-none text-black rounded-sm px-2" type="text">
                            </div>
                        </template>
                        <div class="flex flex-col w-full">
                            <label for="telefone">telefone</label>
                            <input v-model="user.fone" id="telefone" class="outline-none text-black rounded-sm px-2" type="tel">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="senha">senha</label>
                            <input v-model="user.password" id="senha" class="outline-none text-black rounded-sm px-2" type="password">
                        </div>
                        <div class="flex flex-col w-full">
                            <label for="confir">confirmar senha</label>
                            <input v-model="user.confpassword" id="confir" class="outline-none text-black rounded-sm px-2" type="password">
                        </div>
                    </div>
                </div>
            <DialogFooter>
                <div class="flex w-full justify-end space-x-3">
                    <button @click="navigatePage('index')" class="active:scale-95 p-1 text-white px-2 bg-red-600 uppercase rounded-md">cancelar</button>
                    <button @click="createUser()" class="active:scale-95 p-1 text-white  bg-green-600 uppercase rounded-md">confirmar</button>
                </div>
            </DialogFooter>
        </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup>


const pessoa = ref('fisica')
const use_modal = useModal()
const use_user = userModal()

const user = ref<createUser>({ 
    name: '', 
    email: '', 
    fone: '',
    cpf: '', 
    password: '', 
    confpassword: ''
})

const createUser = async () =>{
    console.log(pessoa.value);
    
    // await use_user.createUser(user.value)
}

const navigatePage = (page: string) =>{
    return navigateTo({
            name: page
        })
}
</script>

<style>

</style>