const lista = document.getElementById("lista");

var listado = ['Luna', 'Estrada', 'Xelhuantzi', 'Dominguez'];

const AgregarElemento = () => {
    var nomb = document.getElementById("elemento");
    lista.innerHTML = '';
    listado.push(nomb.value);
    mostrar();
    nomb.value = "";
}

const mostrar = () => {
    listado.map(nombre => {
    var li = document.createElement('li');
    li.innerHTML = nombre;
    lista.appendChild(li);
})
}
const BorrarElemento = () => {
    lista.innerHTML = '';
    listado = [];
}
mostrar();