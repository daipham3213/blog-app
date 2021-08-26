export interface RegisterModel {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    password_confirm: string;
    phone: string;
    email: string;
    gender: 'male' | 'female';
    dob: Date;
}

export interface LoginModel {
    username: string;
    password: string;
}

export interface ResetPasswordModel {
    email: string;
    username: string;
}

export interface ResetPasswordConfirmModel {
    token: string;
    password: string;
    password_confirm: string;
}