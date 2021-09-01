import * as React from "react";
import {Link, useHistory, useLocation} from "react-router-dom";
import {routes} from "src/constants/routes";
import logo from "src/assets/img/logo.svg"
import {useApplicationManager} from 'src/hooks/manager/useApplicationManager'
import {observer} from "mobx-react";
import {anonymous} from "src/constants/security";
import {useEffect} from "react";

export const HeaderMenu = observer(() => {
    const applicationManager = useApplicationManager()
    const {visibleHeader} = applicationManager;
    const history = useHistory();
    const location = useLocation();
    const {user} = applicationManager;

    function effectPage() {
        if (location.pathname === routes.forget.path) {
            visibleHeader.visible = false;
        } else {
            visibleHeader.visible = true;
        }
    }

    useEffect(effectPage, [location])

    const onLogOff = () => {
        try {
            applicationManager.user = anonymous;
            history.push(routes.auth.path);

        } catch (error) {
            //error
        }
    }
    const content = (!user.isUser ?
        <>
            <span>У вас нет аккаунта?</span>
            <Link to={routes.reg.path} className="btn btn-blue">Регистрация</Link>
        </>
        :
        <button onClick={onLogOff} className="link link-grey">Выйти</button>);

    return (
        <>
            <div className="header-menu__left-content">
                <Link to={routes.auth.path}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="header-menu__right-content">
                {visibleHeader.visible && content}
            </div>
        </>
    )
})
