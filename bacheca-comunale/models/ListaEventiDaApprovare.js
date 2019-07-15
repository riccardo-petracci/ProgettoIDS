const Evento = require('./Evento');
const Cittadino = require('./Cittadino');



var listaEventiDaApprovare = {

"lista":ListaEventiDaApprovare = [],



    isEmpty(ListaEventiDaApprovare){
        if(ListaEventiDaApprovare.length == 0){
            return true;
        }else{ 
            return false;
             }
    },


    getEvent(eventoId, ListaEventiDaApprovare){
        for (var i=0; i < ListaEventiDaApprovare.length; i++) {
            if (ListaEventiDaApprovare[i].eventoId === eventoId) {
                return ListaEventiDaApprovare[i];
            }
        }
    },


    deleteEvent(eventoId, ListaEventiDaApprovare){
        for (var i=0; i < ListaEventiDaApprovare.length; i++) {
            if (ListaEventiDaApprovare[i].eventoId === eventoId) {
                ListaEventiDaApprovare.splice(i);
            }
        }
    }




}

module.exports = listaEventiDaApprovare; 