import React from 'react';
import { IonToast } from '@ionic/react';

interface ToastType {
    open: boolean;
    message: string;
    duration: number;
    color: string
}

const Toast: React.FC<ToastType> = (props) => {
    return (
        <IonToast
            isOpen={props.open}
            message={props.message}
            duration={props.duration}
            color={props.color}
            position="top"
        />
    );
};

export default Toast;
