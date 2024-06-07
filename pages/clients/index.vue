<template>
    <div class="w-full h-full mb-2">
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead class="w-[100px]">
                    Cliente
                    </TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead class="text-right">
                        Pessoa
                    </TableHead>
                    <TableHead class="text-right">
                        CPF
                    </TableHead>
                    <TableHead class="text-right">
                        CNPJ
                    </TableHead>
                    <TableHead class="text-right">
                        Agenda
                    </TableHead>
                    <TableHead class="text-right">
                        Agenda Criada
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="alldate in userModal().allDate" :key="alldate.id">
                    <TableCell class="font-medium">
                        {{ alldate.name }}
                    </TableCell>
                    <TableCell>
                        {{ alldate.email }}
                    </TableCell>
                    <TableCell>
                        {{ alldate.fone }}
                    </TableCell>
                    <TableCell class="text-right">
                        {{ alldate.pessoa }}
                    </TableCell>
                    <TableCell class="text-right">
                        {{ alldate.cpf }}
                    </TableCell>
                    <TableCell class="text-right">
                        {{ alldate.cnpj }}
                    </TableCell>
                </TableRow>
            </TableBody>
         </Table>
    </div>
</template>

<script setup lang="ts">
const use_user = userModal()

definePageMeta({
    name: 'editclients'
})


onMounted(() => {
    use_user.showUsers()
})
</script>

<style scoped>

</style>