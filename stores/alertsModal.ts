import Swal from "sweetalert2";
import type { updateUser } from "./users";

export const alertModal = defineStore('alerts', {
    state:() =>({}), 
    actions:{
        deletAlert(id: number){
          Swal.fire({
            title: "Deletar?",
            text: "Essa ação não há como reverter!",
            icon: "warning",
            background: "#1e3d62",
            color: "white",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText:"Cancelar",
            confirmButtonText: "Deletar usuario!"
          }).then((result) => {
            if (result.isConfirmed) {
               userModal().deleteUser(id)
              Swal.fire({
                title: "Deleted!",
                text: "Esse usuario foi deletado.",
                icon: "success", 
                background: "#1e3d62",
                color: "white",
                
              });
            }
          });
        },
        updateAletr(id: number, user: updateUser){
          Swal.fire({
            title: "Atualizar?",
            text: "Essa ação não há como reverter!",
            icon: "warning",
            background: "#1e3d62",
            color: "white",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText:"Cancelar",
            confirmButtonText: "Atualizar!"
          }).then((result) => {
            if (result.isConfirmed) {
               userModal().updateUser(id, user)
              Swal.fire({
                title: "Atualizado!",
                text: "Esse usuario foi Atualizado.",
                icon: "success", 
                background: "#1e3d62",
                color: "white",
                
              });
            }
          });
        }
    }
})