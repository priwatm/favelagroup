import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {Confirmed} from 'src/components/pages/Registration/components/EmailConfirmed';
import {RepeatedEmailConfirmed} from 'src/components/pages/Registration/components/RepeatedConfirmed';
import {ConfirmedState} from 'src/components/pages/Registration/components/types';
import {useApplicationManager} from "src/hooks/manager/useApplicationManager";
import {routes} from "../../../../constants/routes";
import {useHistory} from "react-router-dom";


export const EmailConfirmed = observer(() => {
    const applicationManager = useApplicationManager()
    const history = useHistory();
    const {user} = applicationManager;
    const [component, setComponent] = useState<ConfirmedState>(ConfirmedState.EmailConfirmed);

    function effectInitial() {
        if (user.isUser === false) {
            history.push(routes.auth.path);
        }
    }

    const onEmailConfirmed = () => {
        setComponent(ConfirmedState.EmailConfirmed)
    }

    const onRepeatedEmailConfirmed = () => {
        setComponent(ConfirmedState.RepeatedConfirmed)
    }

    useEffect(effectInitial, []);

    return (
        <>
            {component === ConfirmedState.EmailConfirmed && <Confirmed onControl={onRepeatedEmailConfirmed} />}
            {component === ConfirmedState.RepeatedConfirmed && <RepeatedEmailConfirmed onControl={onEmailConfirmed} />}
        </>
    );
})
