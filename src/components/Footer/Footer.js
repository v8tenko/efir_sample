import React from "react";
import style from "./Footer.module.css";
import Maps from "../map/map";

function Footer() {
    return (
        <>
            <div className={style.map__container}>
                <Maps />
            </div>
            <div className={style.footer}>
                <div className={style.title__wrapper}>
                    <div className={style.footer__name}>Эфир</div>
                    <div className={style.footer__title}>Как с нами связаться</div>
                </div>
                <div className={style.footer__info}>
                    <div className={style.call}>
                        <div>Звоните</div>
                        <div className={style.number}>+7 (981) 792-06-37</div>
                    </div>
                    <div className={style.call}>
                        <div>Звоните</div>
                        <div className={style.number}>+7 (812) 317-77-95</div>
                    </div>
                    <div className={style.send}>
                        <div>Пишите</div>
                        <div className={style.mail}>info@salonefir.ru</div>
                    </div>
                    <div className={style.come}>
                        <div>Приезжайте</div>
                        <div className={style.address}>г. Санкт-Петербург, ул. Парадная д.3 к.2</div>
                    </div>
                </div>
                <div className={style.copyrate}>
                    © Copyright — Все права защищены. salonefir.ru
                </div>
            </div >
        </>
    )
}

export default Footer;