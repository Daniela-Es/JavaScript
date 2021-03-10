console.log("Bienvenido a la consola");

// funcion para explicar el dato boolean
function boolean() {
    Swal.fire('Es un tipo de dato logico que solo puede tener dos valores: verdadero o falso')
}

// funcion para explicar el dato null
function nulo() {
    Swal.fire('Representa una referencia que apunta, de manera intencional, a un objeto o direccion no existente o invalida')
}

// funcion para explicar el tipo de dato number
function number() {
    Swal.fire('Es un tipo de dato numerico: puede incluir enteros, decimales, etc.')
}

// funcion para explicar el tipo de dato undefinded
function indefinido() {
    Swal.fire('Es un valor que se asigna automaticamente a variables que recien han sido declaradas')
}

// funcion para explicar el tipo de dato string
function string() {
    Swal.fire('Es una secuencia de caracteres usado para representar texto')
}

// funcion para explicar el tipo de dato bigint
function bigint() {
    Swal.fire('Es un tipo de dato numerico que puede representar enteros cuyos digitos solo estan limitados por la memoria del sistema en el que se aloja el dato')
}

// funcion para explicar el tipo de dato symbol
function symbol() {
    Swal.fire('Un valor symbol representa un identificador unico')
}


// complejos:
// funcion para explicar las funciones
function funcion() {
    Swal.fire('Se pueden considerar objetos regulares con la caracteristica de poder ser llamadas posteriormente')
}

// funcion para explicar los objetos
function objeto() {
    Swal.fire('Se pueden determinar como una lista estructurada de pares de claves y valores en donde se pueden agregar datos')
}

// funciones para repaso
function verdadero() {
    Swal.fire(
        'Bien hecho!',
        'Sigue jugando',
        'success'
      )
}

function falso() {
    Swal.fire(
        'Revisa tu respuesta',
        'Cuidado',
        'error'
      )
}