// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


//dichiarazione
const kmDaPercorrere = prompt('Quanti km percorrerai ?');
const userAge = parseInt(prompt('Quanti anni hai ?'));

//calcolo prezzo biglietto in base ai km percorsi
let prezzoBiglietto = kmDaPercorrere * 0.21;
prezzoBiglietto = prezzoBiglietto.toFixed(2);
prezzoBiglietto = parseFloat(prezzoBiglietto);
console.log(prezzoBiglietto);

//logica programma

//minorenni
if ( userAge < 18 ){
    let scontoBiglietto = prezzoBiglietto;
    scontoBiglietto = (scontoBiglietto * 20) / 100;
    scontoBiglietto = prezzoBiglietto - scontoBiglietto;
    console.log("Sconto applicato 20%");
    console.log(scontoBiglietto.toFixed(2));

    document.getElementById('prezzo_finale').innerHTML ="Sei minorenne quindi pagherai: " + scontoBiglietto.toFixed(2) + " euro";

//over 65
}else if ( userAge >= 65 ){
    let scontoBiglietto = prezzoBiglietto;
    scontoBiglietto = (scontoBiglietto * 40) / 100;
    scontoBiglietto = prezzoBiglietto - scontoBiglietto;
    console.log("Sconto applicato 40%");
    console.log(scontoBiglietto.toFixed(2));

    document.getElementById('prezzo_finale').innerHTML ="Sei over 65 quindi pagherai: " + scontoBiglietto.toFixed(2) + " euro";
    
//nessuno sconto
}else{
    console.log("Nessuno sconto applicato");
    console.log(prezzoBiglietto.toFixed(2));

    document.getElementById('prezzo_finale').innerHTML ="Nessuno sconto applicato, prezzo: " + prezzoBiglietto.toFixed(2) + " euro";
}