import React from "react";
import styles from "../styles/about.module.css";


export default function about() {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.card}>
                    <div className={styles.heading}>
                        <h1>About Us</h1>
                    </div>
                    <div className={styles.content}>
                        <p>The HomeMade is an NGO and Company in India headquartered in Mumbai. 
                            Our organisation strives to eliminate classroom hunger by implementing the Mid-Day Meal Scheme 
                            in the government schools and government-aided schools. 
                            Alongside, HomeMade also aims at countering malnutrition 
                            and supporting the right to education of socio-economically disadvantaged children.
                            Since 2020, HomeMade has been concerting all its efforts towards providing 
                            fresh and nutritious meals to children on every single school day. 
                            We are continuously leveraging technology to multiply our reach. 
                            The state-of-the-art kitchens have become a subject of study and have 
                            attracted curious visitors from around the world.
                            Our partnership with the Government of India and various State Governments, 
                            along with the persistent support from corporates, individual donors, 
                            and well-wishers have helped us to grow from serving just 1,500 children in 5 schools in 2000 
                            to serving 1.8 million children.
                            Today, HomeMade is the world’s largest (not-for-profit run) 
                            Mid-Day Meal Programme serving wholesome food every school day to over 
                            1.8 million children from 19,039 schools across 14 states and 2 Union territory of India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
