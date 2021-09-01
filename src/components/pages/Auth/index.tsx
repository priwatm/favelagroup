import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react";
import {ButtonSocial} from "src/components/UI/ButtonSocial";
import {routes} from "src/constants/routes";

export const Auth = observer(() => {
    const history = useHistory();
    const [state, setState] = useState({
            email: '',
            password: ''
        }
    )
    const [error, setError] = useState('');

    const handleSubmit = () => {
        setError('');
        if (state.email === '' || state.password === '') {
            return setError((!state.email ? 'Введите email, ' : '') + (!state.password ? 'Введите пароль' : ''));
        }
        if (state.email !== 'example@example.com' || state.password !== 'password2021') {
            return setError('Неверный еmail или пароль');
        }
    }

    useEffect(() => setError(''), [state]);

    return (
        <div className="auth-container">
            <h1>Войти</h1>
            <h2>Добро пожаловать, рады видеть вас снова 👋</h2>
            <div className="auth-container__social-group">
                <ButtonSocial icon="facebook" text="Войти через Facebook" />
                <ButtonSocial icon="google" text="Войти через Google" />
            </div>
            <h2>или</h2>
            <div className="auth-container__input-group">
                <input className={error ? 'danger' : ''} type="email" value={state.email} name="email"
                       placeholder="Email"
                       onChange={(e) => setState({...state, email: e.currentTarget.value})} />
                <input className={error ? 'danger' : ''} type="password" value={state.password} name="password"
                       placeholder="Пароль"
                       onChange={(e) => setState({...state, password: e.currentTarget.value})} />
                <div className="text-danger">{error}</div>
            </div>
            <div className="auth-container__submit-group">
                <button onClick={
                    handleSubmit} className="btn btn-blue">Войти в аккаунт
                </button>
                <button onClick={() => history.push(routes.forget.path)}
                        className="link"> Забыли пароль?
                </button>
            </div>
        </div>
    )
})
