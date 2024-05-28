<template>
        <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead class="w-[100px]">
                            <span>Nome</span>
                        </TableHead>
                        <TableHead class="w-[100px]">
                            <span>Agendado</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody class=" overflow-y-auto  snap-y">
                    <TableRow v-for=" agenda in use_agenda.agendas" :key="a"  >
                            <TableCell class="font-medium">
                                <div>
                                    {{ agenda.name }}
                                </div>
                            </TableCell>
                            <TableCell class="font-medium flex ">
                                <div> {{ agenda.date }}</div>
                            </TableCell>
                    </TableRow>
                </TableBody>
        </Table>
</template>

<script setup>

const use_agenda = useAgenda()


onMounted( async () =>{
    await use_agenda.getAgendas()
})

</script>

<style lang="scss" scoped>
</style>