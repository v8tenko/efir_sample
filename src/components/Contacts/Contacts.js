import React from "react";
import styles from "./Contacts.module.css";
import { Container } from 'react-bootstrap';

const Contacts = () => {
    return (
        <Container>
            <div className={styles.container__wrapper}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.image}></div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>Эфир на Парадной</h3>
                            <div className={styles.address}>Санкт-Петербург, ул. Парадная, д.3 к.2</div>
                            <div className={styles.workTime}>
                                <div>пн-пт 10:00–22:00</div>
                                <div>сб,вс 10:00–21:00</div>
                            </div>
                            <div className={styles.map}><a href="/#" target="_blank">Открыть на карте</a></div>
                            <div className={styles.phones}>
                                <div className={styles.phone}>+7 (981) 792-06-37</div>
                                <div className={styles.phone}>+7 (812) 317-77-95</div>
                            </div>
                            <div className={styles.mail}><a href="/#">info@salonefir.ru</a></div>
                            <div className={styles.signUp}><a>Записаться онлайн</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contacts;