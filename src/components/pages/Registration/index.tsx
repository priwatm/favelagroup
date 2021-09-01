import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {observer} from "mobx-react";
import {ButtonSocial} from "src/components/UI/ButtonSocial";
import {routes} from "src/constants/routes";
import {useApplicationManager} from 'src/hooks/manager/useApplicationManager'
import {online} from "src/constants/test";


export const Registration = observer(() => {
    const applicationManager = useApplicationManager()

    const history = useHistory();
    const [state, setState] = useState({
            name: '',
            email: '',
            password: ''
        }
    )
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const onLogOn = () => {
        try {
            applicationManager.user = online;
        } catch (error) {
            //error
        }
    }

    const handleSubmit = async () => {
        setError('');
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(state.email)) {
            return setError('Возможно вы ошиблись в указании почтового сервиса')
        }
        await onLogOn();
        history.push(routes.reg.routes!.confirmed.path);
    }

    useEffect(() => setError(''), [state]);

    return (
        <div className="reg-container">
            <h1>Регистрация</h1>
            <h2>Зарегистрируйся и получи доступ к аналитике аккаунтов.</h2>
            <div className="auth-container__social-group">
                <ButtonSocial icon="facebook" text="Войти через Facebook" />
                <ButtonSocial icon="google" text="Войти через Google" />
            </div>
            <h2>или</h2>
            <div className="reg-container__input-group">
                <input type="text" value={state.name} name="name"
                       placeholder="Имя"
                       onChange={(e) => setState({...state, name: e.currentTarget.value})} />
                <input className={error ? 'danger' : ''} type="email" value={state.email} name="email"
                       placeholder="Email"
                       onChange={(e) => setState({...state, email: e.currentTarget.value})} />
                <div className="text-danger">{error}</div>
                <input type="password" value={state.password} name="password"
                       placeholder="Пароль"
                       onChange={(e) => setState({...state, password: e.currentTarget.value})} />
                <button className="link" hidden={visible} onClick={() => setVisible(true)}>У меня есть промокод</button>
                {visible ? <input placeholder="Промокод"
                                  name="promoCode" /> : null}
            </div>
            <div className="reg-container__submit-group">
                <button onClick={handleSubmit} className="btn btn-blue">Создать аккаунт</button>
                <span>Создавая аккаунт, я согласен с <button
                    className="link">условиями оферты</button></span>
            </div>
        </div>
    )
})
