import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ydroulis.png" alt="Profile img" />
            <div>
                <strong>Yuri Lombardi Androulis</strong>
                <p>
                    <img src="icons/level.svg" alt="Icon level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}