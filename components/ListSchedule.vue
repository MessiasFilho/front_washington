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
                    <TableRow v-for="i in 20" >
                            <TableCell class="font-medium">
                                <div> maria</div>
                            </TableCell>
                            <TableCell class="font-medium flex ">
                                <div> 10/03/1545</div>
                            </TableCell>
                    </TableRow>
                </TableBody>
        </Table>
</template>

<script setup>

const agenda = ref({
    nome: '', 
    data: ''
})

</script>

<style lang="scss" scoped>
</style>