/**
 * Описание типа данных для пути
 */
export interface Route {
    //Название пути
    title: string;
    //Путь в клиенском приложении
    path: string
}

export interface Routes {
    [key: string]: Route & {
        routes?: Routes;
    }
}

export const routes: Routes = {
    auth: {
        title: 'Авторизаия',
        path: '/'
    },
    reg: {
        title: 'Регистрация',
        path: '/reg',
        routes: {
            confirmed: {
                title: 'Подтвердите ваш e-mail',
                path: '/email-confirmed'
            }
        }
    },
    forget: {
        title: 'Восстановление пароля',
        path: '/forget-pass'
    }
}
