
# Condivisione dello stato in React

In REACT, lo stato all'interno di un componente è, *di default*, INACCESSIBILE dall'esterno.

E questo accade perchè:
-> Lo stato di un componente è considerato "*proprietà privata*" del componente stesso

In modo da:
-> Non poter essere modificato direttamente da componenti esterni

**Come possiamo fare per condividere lo stato?**

1) Passare lo stato come props.
2) State lifting (*Elevazione di Stato*)
3) React Context

## 1) Passare lo stato come props
Questo metodo è utile quando lo stato deve essere condiviso tra un componente padre e i suoi componenti figli DIRETTI.

> Esempio che trovi nella cartella `components/props`: In questo esempio, il componente
> `PadreProps.jsx` condivide lo stato con il componente `FiglioProps.jsx`.

## 2) State Lifting (Elevazione di stato)
Questo metodo è necessario se lo stato deve essere condiviso
tra componenti NON direttamente collegati.

> Esempio della cartella `components/elevazione`: In questo scenario ipotetico, il
> componente `FiglioA.jsx`, gestiva il proprio stato "nome" e aveva una
> funzione "setNome" per aggiornarlo.
>
> Tuttavia, se avessimo voluto condividere lo stato "nome" con il componente `FiglioB.jsx`, (tenendolo aggiornato in vista di cambiamenti) non sarebbe stato possibile (*intendo farlo direttamente*) perché i due componenti non erano direttamente collegati nella gerarchia.

Per risolvere questo problema, dobbiamo elevare lo stato "nome" al componente antenato comune più vicino, ovvero `AntenatoComune.jsx`.

## 3) React Context
React Context è uno strumento che ci permette di condividere dati (chiamati "valori del contesto") tra componenti in React, anche se non sono direttamente collegati nella gerarchia dei componenti.

Normalmente, in React i dati vengono passati da un genitore ai figli tramite props.
Questo è ok quando i componenti sono collegati direttamente, ma può diventare veramente complesso quando si devono passare dati tra componenti che non hanno la classica relazione "genitore-figlio" diretta.

Ecco dove entra in gioco React Context: invece di passare i dati attraverso una lunga catena di componenti intermedi, un componente può utilizzare il **Context** per fornire (*o "pubblicare"*) determinati dati a tutta la gerarchia dei componenti sottostanti.

I passi principali per utilizzare **React Context** sono:

- **Generare il Contesto**: Si crea un nuovo contesto (*un semplice componente*) utilizzando la funzione **createContext()**.

>     import { createContext } from 'react';
>
>     const Contesto = createContext(valoreDiDefault);
>
>     export default Contesto;


- **Passare il Contesto**: Un **Provider** (*che è un componente*) wrappa i componenti figli che devono accedere al contesto, fornendone il valore.

>     <Contesto.Provider  value={valore}>
>
>     {/* Qua puoi mettere tutti i componenti che possono utilizzare il contesto */}
>
>     </Contesto.Provider>



- **Accedere al Contesto**: I componenti figli possono accedere ai valori del contesto utilizzando l'hook **useContext()** o un **Consumer** (anche lui, un componente).

>     // Esempio di un componente che usa il contesto tramite l'hook useContext()
>
>     import { useContext } from 'react';
>     import Contesto from './Contesto';
>
>     function Componente() {
>       const datiDaContesto = useContext(Contesto);
>
>       return (
>         <div>
>           {/* Qua inserirai i tag che usano i dati dal contesto */}
>         </div>
>       );
>     }
>
>     export default Componente;


>     // Esempio di un componente che usa il contesto tramite un Consumer
>
>     import Contesto from './Contesto';
>
>     function Componente() {
>       return (
>         <Contesto.Consumer>
>           {value => (
>             <div>
>               <p>Username: {value.username}</p>
>               <p>Pass: {value.password}</p>
>             </div>
>           )}
>         </Contesto.Consumer>
>       );
>     }
>
>     export default Componente;
>
> PS: In un Consumer, non si usa la parola chiave value esplicitamente
> come si fa con Provider. Consumer accetta una funzione come figlio
> (nota come render prop) che riceve automaticamente il valore del
> contesto.









In questo modo, i componenti figli possono accedere ai dati condivisi dal **Provider**
senza doverli passare manualmente attraverso le props a ogni livello della gerarchia.

> React Context ci permette di evitare il passaggio *manuale* delle props da ogni livello (pratica che in gergo tecnico assume il nome di *Prop Drilling*).
