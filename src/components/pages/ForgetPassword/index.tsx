import * as React from "react";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {ForgetState} from "src/components/pages/ForgetPassword/components/types";
import {ForgetPass} from 'src/components/pages/ForgetPassword/components/ForgetPassword'
import {EmailSent} from 'src/components/pages/ForgetPassword/components/EmailSent'
import {useApplicationManager} from "src/hooks/manager/useApplicationManager";
import {routes} from "src/constants/routes";
import {useHistory} from "react-router-dom";


export const ForgetSend = observer(() => {
    const [component, setComponent] = useState<ForgetState>(ForgetState.ForgetPassword);
    const [icon, setIcon] = useState('icon__key')
    const history = useHistory();

    const onEmailSent = () => {
        setComponent(ForgetState.EmailSent);
        setIcon('icon__send');
    }

    const onReturn = () => {
        history.push(routes.auth.path)
    }

    return (
        <div className="forget-container">
            <i className={icon} />
            {component === ForgetState.ForgetPassword && <ForgetPass onControl={onEmailSent} />}
            {component === ForgetState.EmailSent && <EmailSent onSubmit={onReturn}/>}

        </div>
    )
})
