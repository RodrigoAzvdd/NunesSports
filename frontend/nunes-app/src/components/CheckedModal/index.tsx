import styles from './styles.module.css';

export default function CheckedModal() {
    return (
        <>
            <div className={styles.successCheckmark}>
                <div className={styles.checkIcon}>
                    <span className={`${styles.iconLine} + ${styles.lineTip}`}></span>
                    <span className={`${styles.iconLine} + ${styles.lineLong}`}></span>
                    <div className={styles.iconCircle}></div>
                    <div className={styles.iconFix}></div>
                </div>
            </div>
        </>
    )
}