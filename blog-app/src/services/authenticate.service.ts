import {
    LoginModel,
    RegisterModel,
    ResetPasswordConfirmModel,
    ResetPasswordModel,
} from '../models/services.model/models';
import axiosClient from './middleware/axiosClient'

const URL = 'authenticate/';

const Register = (register_info: RegisterModel) => {
    return axiosClient
        .post(
            URL + 'register/',
            { ...register_info },
        );

};

const Login = (login_info: LoginModel) => {
    return axiosClient
        .post(
            URL,
            { ...login_info },
        );
};

const RefreshToken = () => {
    let token = localStorage.getItem('token');
    return axiosClient
        .post(
            URL + 'refresh-token/',
            { token },
        );
};

const VerifyAuthToken = () => {
    let token = localStorage.getItem('token');
    return axiosClient
        .post(
            URL + 'verify-token/',
            { token },
        );

};

const ResetPassword = (model: ResetPasswordModel) => {
    return axiosClient
        .post(
            URL + 'reset-password/',
            { ...model },
        );
};

const ResetPasswordConfirm = (model: ResetPasswordConfirmModel) => {
    const { password, password_confirm, token } = model;
    return axiosClient
        .put(
            URL + 'reset-password/' + token,
            { password, password_confirm },
        );
};

const ResetPasswordCheck = (token: string) => {
    return axiosClient
        .get(
            URL + 'reset-password/' + token,
        );
};

const AccountActivation = (token: string) => {
    return axiosClient.get(
        URL + 'account-activation/' + token,
    );
};

const IsLoggedIn = () => {
    let token: string = localStorage.getItem('token') ?? '';
    if (token.length > 0) {
        return VerifyAuthToken().then((r) => {
            if (r?.status === 201)
                return true;
            else {
                localStorage.removeItem('token');
                return false;
            }
        });
    }
    return false;
};

const Logout = () => {
    let token = localStorage.getItem('token');
    return axiosClient.post(
        URL + 'logout',
        { token },
    );
};

const AuthenticateService = {
    Register,
    Login,
    RefreshToken,
    VerifyAuthToken,
    ResetPassword,
    ResetPasswordConfirm,
    ResetPasswordCheck,
    AccountActivation,
    IsLoggedIn,
    Logout,
};
export default AuthenticateService;