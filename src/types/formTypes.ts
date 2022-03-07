export interface IRegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}