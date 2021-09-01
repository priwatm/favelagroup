import {useContext} from "react";
import {ApplicationContext, ApplicationContextProps} from "src/context/application-context";

export const useApplicationManager = () => {
    const {applicationManager} = useContext<ApplicationContextProps>(ApplicationContext);
    return applicationManager;
}
