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
.catch(err => console.err(err))

getPostTitle(3)
.then(obj => console.log(obj))
.catch(err => console.err(err))

getPostTitle(4)
.then(obj => console.log(obj))
.catch(err => console.err(err))


/**🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject. */

//Crea la funzione lanciaDado() che ritorna una promise
function lanciaDado(){
  const promessa = new Promise((resolve , reject)=>{
    const diceValue = Math.round((Math.random() * 5 )+ 1)
    //inserisco un timeout di 3 secondi
    setTimeout(()=>{
      console.log("lancio i dadi")
     
    }, 3000)


  })
  return promessa
}

lanciaDado()


