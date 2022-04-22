import React from "react";
import { Col } from "react-bootstrap";
import styles from "./TeamCard.module.css";

const TeamCard = (props) => {
    return (
        <Col className={styles.col_} xs="6" lg="3" md="4" sm="6" onClick={() => {
            props.setModalActive([1, props.id])
        }}>
            <div className={styles.image} style={{ backgroundImage: `url(${props.src})` }}></div>
            <p className={styles.post}>{props.post}</p>
            <p className={styles.name}>{props.name}</p>
        </Col>
    )
}


export { TeamCard }