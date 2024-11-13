export class LoginError extends Error {
    constructor(message) {
        super(message); // Llama correctamente al constructor de la clase padre
        this.name = "LoginError"; // Establece el nombre del error para identificar el tipo de error
    }
}

export class SignInError extends Error {
    constructor(message) {
        super(message); // Llama correctamente al constructor de la clase padre
        this.name = "SignInError"; // Establece el nombre del error para identificar el tipo de error
    }
}
