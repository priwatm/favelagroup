import * as React from "react";
import {observer} from "mobx-react";
import {Header, HeaderMenu} from "src/components";
import {Route, Switch, useHistory} from "react-router-dom";
import {routes} from "src/constants/routes";
import {Auth, Registration, ForgetSend, EmailConfirmed} from "src/components/pages";
import {useEffect} from "react";

export const MainContainer = observer(() => {
    const history = useHistory();

    function effectInitial() {
        if (history.location.pathname = '/') {
            history.push(routes.auth.path)
        }
    }

    useEffect(effectInitial, []);
    let content: React.ReactNode = '';
    content = (
        <Switch>
            <Route path={routes.auth.path} component={Auth} />
            <Route path={routes.reg.path} component={Registration} />
            <Route path={routes.reg.routes!.confirmed.path} component={EmailConfirmed} />
            <Route path={routes.forget.path} component={ForgetSend} />
        </Switch>
    )
    return (
        <>
            <Header>
                <HeaderMenu />
            </Header>
            {content}
        </>
    )
});
