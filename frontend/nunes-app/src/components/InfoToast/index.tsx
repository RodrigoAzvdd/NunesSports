'use client';

import styles from './styles.module.css';

type SuccessToastProps = {
    toastIsOpen?: boolean,
    text?: string,
    bg?: 'green' | 'red'
}

const InfoToast = ({ toastIsOpen, text, bg }: SuccessToastProps) => {
    return (
        toastIsOpen ? (
            <div className={`${styles.main} ${bg === 'green' ? styles.green : styles.red}`}>
                <span>{text}</span>
            </div>
        ) : null
    );
}

export default InfoToast;
