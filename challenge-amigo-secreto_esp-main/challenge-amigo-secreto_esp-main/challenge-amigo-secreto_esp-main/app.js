let amigos = [];

function agregarAmigo(){
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }
    // verificar si ya el nombre esta
    if(amigos.includes(nombre)){
        alert("Este nombre ya esta agregado");
        input.value = "";
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);
    console.log("Amigos actualizados:", amigos);


    // Limpiar el campo de entrada
    input.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista (<li>)
        const li = document.createElement('li');
        // Asignar el nombre del amigo como contenido del <li>
        li.textContent = amigos[i];
        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return; // Detener la ejecución si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}