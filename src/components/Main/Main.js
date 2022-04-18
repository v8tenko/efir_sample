import React from "react";
import style from "./Main.module.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/slider/1.webp";
import img2 from "../../images/slider/2_1.webp";
import img3 from "../../images/slider/3_1.webp";
import img4 from "../../images/slider/4.webp";
import img5 from "../../images/slider/5.webp";
import "./main.css";

function Main() {
    return (
        <div>
            <div className={style.wrapper}>
                <h1 className={style.main__title}>Наш салон красоты</h1>
                <div className={style.slider__wrapper}>
                    <Carousel controls={false} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="efir1"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="efir2"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="efir3"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="efir4"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img5}
                                alt="efir5"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div >
    )
}

export default Main;