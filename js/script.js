console.log('VUE OK', Vue)

const app = Vue.createApp ({
  data () {
    return {
      currentContactId: null,
      currentMessageId: 0,
      newMessages: '',
      searchTerm: '',
      user: {
        name: 'Nome Utente',
        avatar: '_io'
      },
      contacts: [
        {
          id: 1,
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              id: 3,
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          id: 2,
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              id: 1,
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              id: 2,
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              id: 3,
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          id: 3,
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              id: 1,
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              id: 2,
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              id: 3,
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          id: 4,
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          id: 5,
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          id: 6,
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          id: 7,
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          id: 8,
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ]

      
    
    }
  },
  computed: {

    currentContact () {
      return  this.contacts.find(contact => contact.id === this.currentContactId)
       
    },

    currentChat() {
       return this.currentContact.messages;
    },

    // Funzione per ricerca dei contatti
    filteredConctacts () {
      const term = this.searchTerm.toLowerCase()
         return this.contacts.filter(({name}) => name.toLowerCase().includes(term))
      }

  },
  methods: {


    // Funzioen per renderizzare nel DOM l'immagine del contatto
    renderAvatarPic : targetAvatar => `img/avatar${targetAvatar}.jpg`,
    

    // Funzione per settare l'id della chat selezionata
    setCurrentContactId (targetId) {
      return this.currentContactId = targetId
    },

    addNewMessage (text, status) {
      // Genero la data del messaggio
      const currentDate = new Date().toLocaleString()
      

      // Construisco l'oggetto del messaggio
      return {
        id: new Date().getTime(), 
        date: currentDate, 
        message: text, 
        status: status}
    },


    // Funzione per l'invio di nuovi messaggi
    sendNewMessage () {

      // Controllo che ci sia un nuovo messaggio
      if (this.newMessages.length) this.currentChat.push(this.addNewMessage(this.newMessages, 'sent'))

      this.newMessages = ''

      // Risposta al nuovo messaggio
      setTimeout(() => {
        this.currentChat.push(this.addNewMessage('Ok', 'received'))
      }, 1000)
    },


  //  Funzione setta l'id del messaggio selezionato
    setCurrentMessageId (messageId) {this.currentMessageId === messageId ? this.currentMessageId = 0 : this.currentMessageId = messageId},


    // Funzione che cancella il messaggio selezionato 
    deleteMessage() {
      this.currentContact.messages = this.currentChat.filter(message => this.currentMessageId !== message.id)
      this.currentMessageId = 0
    }
  }
    
    

})

app.mount('#root')






