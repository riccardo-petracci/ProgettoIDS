const segnalazione = require('../models/Segnalazione')
const Cittadino = require('../models/Cittadino');
const evento = require('../models/Evento')
var gestoreCittadino= {
  
    "date": date = new Date(),
    constructor(formEvent,gestoreEvento) 
    {
      this.formEvent = formEvent
      this.gestoreEvento = gestoreEvento
    },
   
    getCompiledForm()
    {

    },
    
    getEmptyForm()
    {
        
    },

    notifyEventCreation()
    {
        
    },

    newEvent(cittadino,mail,nomeEvento,dataEvento,descrizione)
    {
        var event = new evento(cittadino,dataEvento,nomeEvento,descrizione,mail,date.toUTCString())
        return event
    },

    //permette di scegliere un file dalla memoria per rispondiOfferta
    // scegliFile(){
    //     var realFileBtn = document.getElementById("realFile");
    //     var customBtn = document.getElementById("customBtn");
    //     customBtn.addEventListener("click", function(){ realFileBtn.click();})
    // }

    compilaSegnalazione(Cittadino,tipoSegnalazione,durata,soccorsi,soccorsiGiunti)
    {
        var segn = new segnalazione(Cittadino,tipoSegnalazione,durata,soccorsi,soccorsiGiunti,date.toUTCString())
        return segn
    }
  }


var gestoreEventi =  {
  
    
    constructor(formEvent,gestoreNotifiche) 
    {
        this.formEvent = formEvent
        this.gestoreNotifiche = gestoreNotifiche
    },
   
    getEventoApprovare()
    {

    },
    
    inserisciEvento()
    {
        
    },

    notificaUfficioSindacale()
    {
        
    },

    notificaCittadino()
    {
    }
    
  }


  
  module.exports.gestoreCittadino = gestoreCittadino
  module.exports.gestoreEventi = gestoreEventi