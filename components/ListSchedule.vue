<template>
        <Table class="bg-[var(--color-button)] rounded-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead class="w-[100px]">
                            <span class="text-white">Nome</span>
                        </TableHead>
                        <TableHead class="w-[100px]">
                            <span class="text-white">Agendado</span>
                        </TableHead>
                        <TableHead class="w-[100px]">
                            <span class="text-white">Delete</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody class=" overflow-y-auto  snap-y">
                    <TableRow v-for=" agenda in use_agenda.agendas" class=""  >
                            <TableCell class="font-medium ">
                                <div class="flex ">
                                    <span class="text-white">{{ agenda.name }}</span>
                                </div>
                            </TableCell>
                            <TableCell class="font-medium flex">
                                <div class="text-[.8rem] whitespace-nowrap text-white"> {{ agenda.date }}</div>
                            </TableCell>
                            <TableCell>
                                <div v-if="use_user.loged.id == agenda.userId">
                                   <button @click="clickDelete(agenda.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                                   </button>
                                </div>
                                
                            </TableCell>
                    </TableRow>
                </TableBody>
        </Table>
</template>

<script setup lang="ts">

const use_agenda = useAgenda()
const use_user = userModal()

const clickDelete = async (id: number ) =>{
    await useAgenda().deleteAgenda(id)
    await use_agenda.getAgendas()
}

onMounted( async () =>{
    await use_agenda.getAgendas()
})

</script>

<style lang="scss" scoped>
</style>