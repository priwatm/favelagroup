import React from "react";
import {observer} from "mobx-react";

export interface ConfirmedProps {
    onControl: () => void
}

export const Confirmed: React.ComponentType<ConfirmedProps> = observer(({onControl}) => {
    return (
        <div className="confirmed-container email-confirmed">
            <h1>Подтвердите ваш e-mail</h1>
            <h2>Игорь, на ваш E-mail отправлено письмо со ссылкой для
                подтверждения. Перейдите по ней, чтобы активировать вашу учетную
                запись и получить 7 дней бесплатного доступа. </h2>
            <div className="confirmed-container__submit-group">
                <button className="btn btn-blue">Перейти к почте</button>
                <button onClick={onControl}
                        className="link"> Мне не пришло письмо
                </button>
            </div>
        </div>
    )
})
