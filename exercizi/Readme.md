DOM orologio
   Partendo da un file html vuoto creare con l'utilizzo di js:

   - un h1 con testo "Che ore sono?"
   - un elemento con id = container
   - un bottone con testo "Scopri" all'interno del elemento #container
   - al click del bottone aggiungere un elemento con id = "counter" come sibling precedente al bottone stesso (vedi metodo `insertBefore`)
   - il counter deve contenere una stringa con l'ora aggiornata ogni secondo (per l'ora italiana usare `new Date().toLocaleTimeString("it-IT)