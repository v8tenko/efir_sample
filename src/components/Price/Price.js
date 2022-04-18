import React from "react";
import styles from "./Price.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import Tab from "./Tab/Tab";
import { Container } from 'react-bootstrap';
import { getData } from "./data";
import { useState } from "react";
import { HairService } from "./Tab/Tab";

const data = getData();

const Price = (props) => {


    const [content, setContent] = useState(HairService);

    const createTabs = (data) => {
        return (
            Object.keys(data).map((elemData, i) => {
                return <Tab id={i} name={elemData} setContent={setContent} />
            })
        )
    }

    return (
        <div className={styles.container}>
            <Container>
                <h1 className={styles.title}>Оказываемые услуги</h1>
                <div className={styles.tab__list}>
                    {createTabs(data)}
                </div>
                <div className={styles.content}>
                    {content}
                </div>
            </Container>
        </div>
    )
}

export default Price;