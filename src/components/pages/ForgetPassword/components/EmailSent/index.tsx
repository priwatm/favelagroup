import React from "react";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {routes} from "src/constants/routes";

export const EmailSent = observer(()=>{
    const history = useHistory();
    return(
        <>
            <h1>Письмо отправлено</h1>
            <h2>На указанный вами e-mail было отправлено письмо для смены пароля</h2>
            <div className="forget-container__submit-group">
                <button onClick={()=>{history.push(routes.auth.path)}} className="btn btn-blue">Вернуться на главную</button>
            </div>
        </>
    )
})
