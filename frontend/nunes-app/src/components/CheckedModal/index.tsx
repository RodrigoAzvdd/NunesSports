import styles from './styles.module.css';

export default function CheckedModal({ toastIsOpen, text }: {
    toastIsOpen: boolean,
    text: string
}) {
    return (
        <>
            {toastIsOpen ? (
                <div className={styles.successCheckmark}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>{text}</h1>
                    </div>
                    <div className={styles.checkIcon}>
                        <span className={`${styles.iconLine} + ${styles.lineTip}`}></span>
                        <span className={`${styles.iconLine} + ${styles.lineLong}`}></span>
                        <div className={styles.iconCircle}></div>
                        <div className={styles.iconFix}></div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
