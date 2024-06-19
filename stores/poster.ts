export interface page{
    title: string, 
    metros: number, 
    aluguel: number, 
    venda: number, 
    andar: number, 
    sala: number, 
    telefone: string, 
    descricao: string 
}
interface imagens {
    id: number, 
    url: string
}


interface posterUrl extends page{
    url: string,
    imgen: imagens[]
}

export const usePoster = defineStore('poster',{
    state: () => ({
        files: [] as File[], 
        file: {} as File | null, 
        posters: {} as posterUrl 
    }), 
    actions:{
        async uploadImagen( info: page ){
            interface uploadInter {
                message : string, 
                id: number,
                status: boolean,
            } 

            if (!this.file) return 
            const formdata = new FormData()

            formdata.append('file', this.file)
            formdata.append('inform', JSON.stringify(info))

            const {data, error} = await useFetch<uploadInter>('upload/photo',{
                method:'post', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}, 
                body: formdata
            })
            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
                    console.log('cheguei');
                    
                    await this.uploadsImages(data.value.id)
            }
        }, 

        async uploadsImages(id: number ){
            
            if (!this.files.length) return
            const formdata = new FormData()
            formdata.append('id',JSON.stringify(id))
            this.files.forEach((file) => {formdata.append(`files`, file)})

            const {data, error} = await useFetch('upload/photos',{
                method:'post', 
                baseURL: useRuntimeConfig().public.backend, 
                headers: {Authorization: `Bearer ${localStorage.getItem('login')}`}, 
                body: formdata, 
            })

            if (error.value){
                console.log(error.value);
            }
            if (data.value){
                console.log(data); 
            }

        }, 

        async showPosters(){
            const {data , error} = await useFetch<posterUrl>('upload/posters',{
                method: 'get',
                baseURL: useRuntimeConfig().public.backend
            })
            if(error.value){
                console.log(error.value);
            }
            if(data.value){
                console.log(data.value);
            }
        }

    }
})