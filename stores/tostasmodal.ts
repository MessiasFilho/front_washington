
type colortype = 'green' | 'red' | 'yellow'
type statustoast = 'error'| 'message' | 'info' | 'success' | 'warning'

const colors: Record<colortype, string> = {
    green: '#3cb371', 
    red: '#ff3658', 
    yellow: '#ffa500'
}
const status: Record<statustoast, string > = {
    error: 'error', 
    info: 'info',
    message: 'message', 
    success: 'success', 
    warning: 'warning'
}

export const toastModal = defineStore('toast', {
    state: () =>({}), 
    actions:{
        createToast(title: string, description: string, color: colortype, stats: statustoast ){
            const {$toast} = useNuxtApp()
            const bg = colors[color]
            $toast[stats](title, {
                description: description, 
                style: {background: bg || '#ff3658', 
                fill: 'white', 
                color: 'white', 
                border: 'none'}
            }) 
           
        } 
    }
    }) 
   