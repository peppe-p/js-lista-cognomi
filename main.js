//1. chiedi all’utente il cognome
var surname = prompt("Inserisci il tuo cognome");

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var surname_list = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
surname_list.push(surname);

//3. stampa la lista ordinata alfabeticamente
surname_list.sort();
for (var i = 0; i < surname_list.length; i++) {
    var li = document.getElementById("surnamelist");
    li.innerHTML = li.innerHTML + "<li>" + surname_list[i] + "</li>";
}

//4. scrivi anche la posizione "umana"(partendo da 1) della lista in cui il nuovo utente si trova