import React from "react";
import {observer} from "mobx-react";
import {routes} from "src/constants/routes";

export interface EmailSentProps {
    onSubmit: () => void
}

export const EmailSent:React.ComponentType<EmailSentProps> = observer(({onSubmit}) => {
    return (
        <>
            <h1>Письмо отправлено</h1>
            <h2>На указанный вами e-mail было отправлено письмо для смены пароля</h2>
            <div className="forget-container__submit-group">
                <button onClick={onSubmit} className="btn btn-blue">Вернуться на главную
                </button>
            </div>
        </>
    )
})
