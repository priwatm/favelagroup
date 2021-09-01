import React from "react";
import {ApplicationManager, MobxManager, ContentManager} from 'src/domain'
import {SecurityStore, ContentStore} from 'src/stores'

export interface ApplicationContextProps {
    applicationManager: ApplicationManager;
}

const applicationManager = new ApplicationManager(
    new MobxManager(new SecurityStore()),
    new ContentManager(new ContentStore())
);


export const ApplicationContext = React.createContext<ApplicationContextProps>({applicationManager})
