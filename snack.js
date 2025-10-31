/**Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */

/*abbiamo detto che le promise sono oggetti che definiscono il completamento o il fallimento di un operazione asincrona creo quindi la funzione */

function getPostTitle(id){
  //ora creo la promise dandola a una costante
  const promessa = new Promise((resolve , reject)=>{
    //passo l'id
    //adesso applico il resolve e il reject della promise
    fetch(`https://dummyjson.com/posts/${id}`)
    .then(res => res.json())
    .then(obj => resolve(obj))
    .catch(reject)
    //ora tutto è pronto per poter usare la funzione creata 
  }
)
return promessa
}

//con la stessa funzione posso fare chiamate diverse semplicemente cambiando l'id

getPostTitle(2)
.then(obj => console.log(obj))
.catch(err => console.error(err))

getPostTitle(3)
.then(obj => console.log(obj))
.catch(err => console.error(err))

getPostTitle(4)
.then(obj => console.log(obj))
.catch(err => console.error(err))


/**🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject. */

//Crea la funzione lanciaDado() che ritorna una promise
function lanciaDado(){

  const promessa = new Promise((resolve , reject)=>{

    console.log("sto lanciando i dadi")
     //inserisco un timeout di 3 secondi
    setTimeout(()=>{
      const diceValue = Math.floor((Math.random()* 6)+1)
      const isBlocked = Math.floor() < 0.2

      if(isBlocked){
        resolve(`il valore del dado è ${diceValue}`)
      }else{
        reject("il dado si è bloccato")
      }

    },3000)

     }
    )
  return promessa
  }

  // e qui invoco la funzione con il then per il resolve e catch per il reject
  lanciaDado()
  .then(risultato => console.log(risultato))
  .catch(error => console.error(error))