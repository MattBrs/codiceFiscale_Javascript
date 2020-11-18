//dichiarazione variabili
let name;
let surname;
let id;
let birthDate;
let email;
let userID;
let password1;
let password2;
let check = false;

//funzione che controlla i campi inseriti alla pressionedel tasto send
function send() {
    //assegno le variabili agli oggetti
    name = document.getElementById("nameTxt");
    surname = document.getElementById("surnameTxt");
    id = document.getElementById("idTxt");
    birthDate = document.getElementById("dateTxt");
    email = document.getElementById("emailTxt");
    userID = document.getElementById("usrIdTxt");
    password1 = document.getElementById("psw1Txt");
    password2 = document.getElementById("psw2Txt");

    //controlli per i valori
    if (name.value == "") {
        document.getElementById("wrong1").innerHTML = "Inserire un nome";
        check = true;
    } else {
        document.getElementById("wrong1").innerHTML = "";
    }
    if (surname.value == "") {
        document.getElementById("wrong2").innerHTML = "Inserire un cognome";
        check = true;
    } else {
        document.getElementById("wrong2").innerHTML = "";
    }
    if (id.value == "" || id.value.length != 16) {
        document.getElementById("wrong3").innerHTML = "Codice fiscale errato";
        check = true;
    } else {
        document.getElementById("wrong3").innerHTML = "";
    }
    if (birthDate.value == "") {
        document.getElementById("wrong4").innerHTML = "Inserisci data valida";
        check = true;
    } else {
        document.getElementById("wrong4").innerHTML = "";
    }
    if (email.value == "") {
        document.getElementById("wrong5").innerHTML = "Inserisci email valida";
        check = true;
    } else {
        document.getElementById("wrong5").innerHTML = "";
    }

    if (userID.value == "") {
        document.getElementById("wrong6").innerHTML = "Inserisci email valida";
        check = true;
    } else {
        document.getElementById("wrong6").innerHTML = "";
    }
    if (password1.value == "") {
        document.getElementById("wrong7").innerHTML =
            "Inserisci password valida";
        check = true;
    } else {
        document.getElementById("wrong7").innerHTML = "";
    }

    if (password2.value != password1.value) {
        document.getElementById("wrong8").innerHTML =
            "Inserisci password valida";
        check = true;
    } else {
        document.getElementById("wrong8").innerHTML = "";
        check = false;
    }
    if (check) {
        check = false;
    }
}
