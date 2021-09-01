import * as React from "react";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {ForgetState} from "src/components/pages/ForgetPassword/components/types";
import {ForgetPass} from 'src/components/pages/ForgetPassword/components/ForgetPassword'
import {EmailSent} from 'src/components/pages/ForgetPassword/components/EmailSent'
import {useApplicationManager} from "src/hooks/manager/useApplicationManager";

export const ForgetSend = observer(() => {
    const applicationManager = useApplicationManager()
    const [component, setComponent] = useState<ForgetState>(ForgetState.ForgetPassword);
    const [icon, setIcon] = useState('icon__key')
    const {visibleHeader} = applicationManager;

    function effectInitial() {
        visibleHeader.visible = false;
    }

    useEffect(effectInitial, []);

    const onEmailSent = () => {
        setComponent(ForgetState.EmailSent);
        setIcon('icon__send');
    }

    return (
        <div className="forget-container">
            <i className={icon} />
            {component === ForgetState.ForgetPassword && <ForgetPass onControl={onEmailSent} />}
            {component === ForgetState.EmailSent && <EmailSent />}

        </div>
    )
})
