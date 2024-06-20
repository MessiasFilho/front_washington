export interface page{
    title: String, 
    metros: number, 
    aluguel: number, 
    venda: number, 
    andar: number, 
    sala: number, 
    telefone: String, 
    description: String 
    url: String | null
}
interface imagens {
    id: Number, 
    url: string,
}
interface posterImages {
    imagen : imagens[]
}

interface posterUrl extends page{
    id: number, 
    url: String,
}

export const usePoster = defineStore('poster',{
    state: () => ({
        files: [] as File[], 
        file: {} as File | null, 
        poster: {} as page, 
        posters : {} as posterUrl[],
        imgens: [] as imagens[],
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
                
            }

        }, 

        async showPosters(){
            const {data , error} = await useFetch<posterUrl[]>('upload/posters',{
                method: 'get',
                baseURL: useRuntimeConfig().public.backend
            })
            if(error.value){
                console.log(error.value.data);
            }
            if(data.value){
               
               this.posters = data.value
            }
        }, 
        async posterImagens(id: number){
            const {data, error} = await useFetch<page>(`upload/poster/${id}`,{
                method: 'GET', 
                baseURL: useRuntimeConfig().public.backend, 
            })
            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
               this.poster = data.value
            }
        },

        async getImagens(id: number){
            const {data, error} = await useFetch<imagens[]>(`upload/imgens/${id}`,{
                method: 'GET', 
                baseURL: useRuntimeConfig().public.backend, 
            })
            if (error.value){
                console.log(error.value.data);
            }
            if (data.value){
                this.imgens = data.value
                console.log(this.imgens);
                
            }
        }

    }
})