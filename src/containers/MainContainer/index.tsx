import * as React from "react";
import {observer} from "mobx-react";
import {Header, HeaderMenu} from "src/components";
import {Route, Switch} from "react-router-dom";
import {routes} from "src/constants/routes";
import {Auth, Registration, ForgetSend, EmailConfirmed} from "src/components/pages";

export const MainContainer = observer(() => {
    const baseUrl = process.env.NODE_ENV === 'production' ? 'favelagroup' : '';
    let content: React.ReactNode = '';
    content = (
        <Switch>
            <Route path={baseUrl + routes.auth.path} component={Auth} />
            <Route path={baseUrl + routes.reg.path} component={Registration} />
            <Route path={baseUrl + routes.reg.routes!.confirmed.path} component={EmailConfirmed} />
            <Route path={baseUrl + routes.forget.path} component={ForgetSend} />
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
