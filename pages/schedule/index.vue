<template>
  <div class="w-full h-full p-2"> 
    <span>Editar Agendas  </span>
    <Table>
            <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
            <TableHeader>
                <TableRow>
                    <TableHead class="w-[100px]">
                    Cliente
                    </TableHead>
                    <TableHead>
                        Email
                    </TableHead>
                    <TableHead>
                        Telefone
                    </TableHead>
                    <TableHead class="text-left">
                        Agenda
                    </TableHead>
                    <TableHead class="text-left">
                        Criado
                    </TableHead>
                  
                    <TableHead class="text-center">
                        Editar
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="schedule in useAgenda().agendas" class="">
                    <TableCell class="font-medium">
                        {{ schedule.name }}
                    </TableCell>
                    <TableCell>
                       {{ schedule.email }}
                    </TableCell>
                    <TableCell>
                       {{ schedule.fone }}
                    </TableCell>
                    <TableCell class="">
                        <div class="whitespace-nowrap">
                            {{ schedule.date }}
                        </div>
                    </TableCell>
                    <TableCell class="whitespace-nowrap">
                       {{ schedule.screated_at }}
                    </TableCell>
                  
                    <TableCell class="">
                        <div class="flex space-x-3 justify-center items-center">
                            <button class="active:scale-90  bg-[var(--color-button)] p-1 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                            </button>
                            <button class="active:scale-90 bg-[var(--color-button)] p-1 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
                            </button>
                        </div>
                    </TableCell>
                  
                </TableRow>
            </TableBody>
         </Table>
  </div>
</template>

<script lang="ts" setup>

const use_schedule = useAgenda()
definePageMeta({
    name: 'schedule'
})

onMounted(() => {
    use_schedule.getAgendas()
})
</script>

<style>

</style>