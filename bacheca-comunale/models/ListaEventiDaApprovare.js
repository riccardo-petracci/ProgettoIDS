const Evento = require('./Evento');
const Cittadino = require('./Cittadino');



var listaEventiDaApprovare = {

"ListaEventiDaApprovare":ListaEventiDaApprovare = [ev1 = new Evento('','22-05-2020','inaugurazione bacheca','','22-05-2019')],



    isEmpty(){
        if(ListaEventiDaApprovare.length == 0){
            return true;
        }else{ 
            return false;
             }
    },


    getEvent(Id){
        for (var i=0; i <=ListaEventiDaApprovare.length; i++) {
            if (ListaEventiDaApprovare[i].eventoId == Id) {
                return ListaEventiDaApprovare[i];
            }
        }
    },


    deleteEvent(eventoId){
        for (var i=0; i < ListaEventiDaApprovare.length; i++) {
            if (ListaEventiDaApprovare[i].eventoId == eventoId) {
                ListaEventiDaApprovare.splice(i);
            }
        }
    }




}

module.exports = listaEventiDaApprovare; 