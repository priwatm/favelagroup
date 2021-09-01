import * as React from "react";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";

export interface ForgetPassProps {
    onControl: () => void;
}

export const ForgetPass: React.ComponentType<ForgetPassProps> = observer(({onControl}) => {
    const [state, setState] = useState({
        email: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = () => {
        setError('');
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(state.email)) {
            return setError('Возможно вы ошиблись в указании почтового сервиса')
        }
        if (state.email !== 'example@example.com') {
            return setError('Неверная почта')
        }
        onControl();
    }

    useEffect(() => setError(''), [state]);

    return (
        <>
            <h1>Восстановить пароль</h1>
            <h2>Введите e-mail, на который регистрировались ранее</h2>
            <div className="forget-container__input-group">
                <input className={error ? 'danger' : ''} type="email" value={state.email} name="email"
                       placeholder="Email"
                       onChange={(e) => setState({...state, email: e.currentTarget.value})} />
                <div className="text-danger">{error}</div>
            </div>
            <div className="forget-container__submit-group">
                <button onClick={handleSubmit} className="btn btn-blue">Отправить</button>
                <button className="link link-grey">Отменить</button>
            </div>
        </>
    )
})
