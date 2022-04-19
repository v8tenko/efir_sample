import React from "react";
import styles from "./Contacts.module.css";
import { Container } from 'react-bootstrap';
import { faClock, faLocationDot, faArrowUpRightFromSquare, faPhone, faEnvelope, faUserPen, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare, faVk } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
    return (
        <Container>
            <div className={styles.container__wrapper}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.image}><div className={styles.imageUnder}></div></div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>Эфир на Парадной</h3>
                            <div className={styles.address}><span className={styles.icon}><FontAwesomeIcon icon={faLocationDot} /></span>Санкт-Петербург, ул. Парадная, д.3 к.2</div>
                            <div className={styles.workTime}>
                                <div><span className={styles.icon}><FontAwesomeIcon icon={faClock} /></span>пн-пт 10:00–22:00</div>
                                <div><span className={styles.icon}><FontAwesomeIcon icon={faClock} /></span>сб,вс 10:00–21:00</div>
                            </div>
                            <div className={styles.map}><a href="/#" target="_blank"><span className={styles.icon}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>Открыть на карте</a></div>
                            <div className={styles.phones}>
                                <div className={styles.phone}><span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>+7 (981) 792-06-37</div>
                                <div className={styles.phone}><span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>+7 (812) 317-77-95</div>
                            </div>
                            <div className={styles.mail}><a href="/#"><span className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></span>info@salonefir.ru</a></div>
                            <div className={styles.signUp}><a><span className={styles.icon}><FontAwesomeIcon icon={faAddressBook} /></span>Записаться онлайн</a></div>
                            <div className={styles.socialNetworks}>
                                <a href="/#" target="_blank" className={styles.socialNetwork}><FontAwesomeIcon className={styles.vk} icon={faVk} /></a>
                                <a href="/#" target="_blank" className={styles.socialNetwork}><FontAwesomeIcon className={styles.instagram} icon={faInstagramSquare} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Container >
    )
}

export default Contacts;