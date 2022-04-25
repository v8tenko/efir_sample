import React from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Modal = ({ active, setActive, data }) => {
    let current = data[active[1]];


    return (
        <div className={`${active[0] ? styles.active + " " + styles.modal : styles.modal}`} onClick={() => setActive([0, 0])}>
            <div className={`${active[0] ? styles.active + " " + styles.modal__content : styles.modal__content}`} onClick={e => e.stopPropagation()}>
                <div className={styles.name}>{current.name}</div>
                <div className={styles.post}>Должность: {current.post}</div>
                <ul>
                    <li className={styles.quote}>{current.quote !== "undefined" ? current.quote : null}</li>
                    {current.info.map((info, index) => (<li key={index}>{info}</li>))}
                </ul>
            </div>
        </div>
    )
}

export { Modal };