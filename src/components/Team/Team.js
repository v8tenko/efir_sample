import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Team.module.css";
import { TeamCard } from "./TeamCard/TeamCard";

const teamData = [
    { name: "Иванов Иван", src: "https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
    { name: "Иванов Иван", src: "https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
    { name: "Иванов Иван", src: "https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
    { name: "Иванов Иван", src: "https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
    { name: "Иванов Иван", src: "https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
    { name: "Иванов Иван", src: "https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
    { name: "Иванов Иван", src: "https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
    { name: "Петров Петр", src: "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d" },
]

const Team = () => {

    const TeamCards = teamData.map(data => <TeamCard src={data.src} name={data.name} />)

    return (
        <Container className={styles.container_}>
            <h1 className={styles.title}>Наша команда</h1>
            <Row>
                {TeamCards}
            </Row>
        </Container>
    )
}

export default Team;