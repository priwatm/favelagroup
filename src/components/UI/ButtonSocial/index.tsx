import * as React from "react";

export interface ButtonSocialProps {
    icon: string;
    text: string;
}

export const ButtonSocial: React.ComponentType<ButtonSocialProps> = ({icon, text}) => {
    return (
        <button className="btn btn-icon">
            <i className={`icon__${icon}`}/>
            <span>{text}</span>
        </button>
    )
}
