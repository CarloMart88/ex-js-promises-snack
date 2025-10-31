/**Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */

/*abbiamo detto che le promise sono oggetti che definiscono il completamento o il fallimento di un operazione asincrona creo quindi la funzione */

function getPostTitle(id){

}

//faccio il fetch classico

fetch(`https://dummyjson.com/posts/1`)
.then(res => res.json())
.then(obj => console.log(obj))
.catch(err => console.err(err))