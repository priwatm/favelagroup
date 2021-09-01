import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";

export interface RepeatedEmailConfirmedProps {
    onControl: () => void;
}

export const RepeatedEmailConfirmed: React.ComponentType<RepeatedEmailConfirmedProps> = observer(({onControl}) => {
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
        onControl();
    }

    useEffect(() => setError(''), [state]);

    return (
        <div className="confirmed-container repeated-email">
            <h1>Мне не пришло письмо</h1>
            <h2>Письмо может прийти с задержкой в 5-10 минут. <br />
                Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку <br />
                "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в <br />
                тех.поддержку <a href="mailto:support@livedune.ru"
                                 className="link">support@livedune.ru</a> и мы активируем ваш аккаунт. </h2>
            <div className="confirmed-container__input-group">
                <input className={error ? 'danger' : ''} type="email" value={state.email} name="email"
                       placeholder="Email"
                       onChange={(e) => setState({...state, email: e.currentTarget.value})} />
                <div className="text-danger">{error}</div>
            </div>
            <div className="confirmed-container__submit-group">
                <button onClick={handleSubmit} className="btn btn-blue">Отправить заново</button>
                <button className="link link-grey">Отменить</button>
            </div>
        </div>
    )
})
