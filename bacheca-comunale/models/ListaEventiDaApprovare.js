const Evento = require('./Evento');
const Cittadino = require('./Cittadino');

ListaEventiDaApprovare = [];



    function isEmpty(ListaEventiDaApprovare){
        if(ListaEventiDaApprovare.length == 0){
            return true;
        }else{ 
            return false;
             }
    }


    function getEvent(eventoId, ListaEventiDaApprovare){
        for (var i=0; i < ListaEventiDaApprovare.length; i++) {
            if (ListaEventiDaApprovare[i].eventoId === eventoId) {
                return ListaEventiDaApprovare[i];
            }
        }
    }


    function deleteEvent(eventoId, ListaEventiDaApprovare){
        for (var i=0; i < ListaEventiDaApprovare.length; i++) {
            if (ListaEventiDaApprovare[i].eventoId === eventoId) {
                ListaEventiDaApprovare.splice(i);
            }
        }
    }






module.exports.ListaEventiDaApprovare = this.ListaEventiDaApprovare; 