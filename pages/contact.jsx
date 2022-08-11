import React from 'react'
import styles from "../styles/contact.module.css";


export default function contact() {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <h1>Contact Us</h1>
                    </div>
                    <div className={styles.content}>
                        <h4>For any concerns,
                            please call at our toll free number between 9 AM to 6 PM,
                            1800-458-9642 (within India)</h4>
                        <h5>
                            Email : HomeMadeindia@gmail.com
                        </h5>
                        <pre><b>Registered Office:</b>
                            The HomeMade India New Krishna Hill
                            West of Fountain Road,
                            Santacruz(West)
                            Mumbai – 400054
                            India
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
