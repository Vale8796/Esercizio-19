var btn = document.getElementById('add');
var nomi = [];

function ListaNomi(_nome, _cognome, _data) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.date = _data;
    this.eta = calcolaEta();
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let data = Number(document.getElementById('data').value);

    let newListaNomi = new ListaNomi(nome, cognome, data);

    nomi.push(newListaNomi);
    console.log(nomi);

    stampaNomi();
});

function calcolaEta() {
    let dataAttuale = new Date();
    let data = new Date(document.getElementById('data').value);

    let annoAttuale = dataAttuale.getFullYear();
    let meseAttuale = dataAttuale.getMonth();
    let giornoAttuale = dataAttuale.getDate();

    let annoNascita = data.getFullYear();
    let meseNascita = data.getMonth();
    let giornoNascita = data.getDate();

        var anni = annoAttuale - annoNascita;

    if (meseNascita > meseAttuale) {
        return anni - 1;
    }
    if (meseAttuale = meseNascita && giornoNascita > giornoAttuale){
        return anni - 1;
    } else {
        return anni;
    }
    
}

function stampaNomi() {
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    nomi.forEach((elemento) => {
        let colonna1 = `<td class="w-25">${elemento.nome} ${elemento.cognome}</td>`;
        let colonna2 = `<td class="w-25">${elemento.eta}</td>`;
        lista.innerHTML += `<tr>${colonna1}${colonna2}</tr>`;
    });
}