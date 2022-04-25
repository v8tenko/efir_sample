import styles from "./Tab.module.css";

export const HairService = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Парикмахерские услуги</div>
            <div className={styles.sex}>Женщины</div>
            <div className={styles.service}>Стрижки/укладки</div>
            <ul>
                <li>Стрижка <span className={styles.addInfo}>(входит укладка и укладочные средства; мытье волос + 200 рублей)</span> — <span className={styles.cost}>2800 Р.</span></li>
                <li>Детская стрижка до 7 лет — <span className={styles.cost}>1300 Р.</span></li>
                <li>Детская стрижка — <span className={styles.cost}>2000 Р.</span></li>
                <li>Коррекция челки — <span className={styles.cost}>1000 Р.</span></li>
                <li>Мытье головы — <span className={styles.cost}>900 Р.</span></li>
                <li>Сушка — <span className={styles.cost}>1200 Р.</span></li>
                <li>Укладка №1 <span className={styles.addInfo}>(брашинг, стайлинг) средняя длина/длинные + 200 р. мытье волос</span> — <span className={styles.cost}>2500 Р.</span></li>
                <li>Укладка №2 <span className={styles.addInfo}>(термо-стайлеры, стайлинг и укладка с элементами прически) средняя длина/длинные) + 200 рублей мытье волос</span> — <span className={styles.cost}>3300 Р.</span></li>
            </ul>
            <div className={styles.service} style={{ marginTop: "30px" }}>Окрашивание</div>
            <ul>
                <li>Окрашивание/тонирование — <span className={styles.cost}>2800 Р.(короткие), 3300 Р.(средние), 4400 Р.(длинные), 6000 Р.(40+ см)</span></li>
                <li>Мелирование — <span className={styles.cost}>3000 Р.(короткие), 4500 Р.(средние), 6000 Р.(длинные), 8000 Р.(40+ см)</span></li>
                <li>Сложное или «Трендовое окрашивание» — <span className={styles.cost}>4300 Р.(короткие), 6600 Р.(средние), 8100 Р.(длинные), 10100 Р.(40+ см)</span></li>
                <li>Декапирование (снятие цвета) — <span className={styles.cost}>1500 Р.(короткие), 2000 Р.(средние), 3000 Р.(длинные)</span></li>
                <li>Глубокое декапирование — <span className={styles.cost}>2500 Р.(короткие), 3500 Р.(средние), 4500 Р.(длинные)</span></li>
                <li>Блондирование — <span className={styles.cost}>3500 Р.(короткие), 4000 Р.(средние), 5000 Р.(длинные)</span></li>
            </ul>
            <div className={styles.service} style={{ marginTop: "30px" }}>Восстанавливающие программы</div>
            <ul>
                <li>«LEBEL» (Япония) — <span className={styles.cost}>2000 Р.(короткие), 2500 Р.(средние), 2800 Р.(длинные)</span></li>
                <li>Уход «Блеск и сила» Молекулярное восстановление волос — <span className={styles.cost}>2000 Р.(короткие), 2500 Р.(средние), 2800 Р.(длинные)</span></li>
                <li>«Абсолютное счастье» (Япония) <span className={styles.addInfo}>(в стоимость программы не входит укладка, сушка)</span> — <span className={styles.cost}>2500 Р.(короткие), 3500 Р.(средние), 5000 Р.(длинные)</span></li>
            </ul>
            <div className={styles.service} style={{ marginTop: "30px" }}>Химическая завивка</div>
            <ul>
                <li>«CUTRIN» (Финляндия) — <span className={styles.cost}>3300 Р.(короткие), 3800 Р.(средние), 4400 Р.(длинные)</span></li>
            </ul>
            <div className={styles.sex} style={{ marginTop: "40px" }}>Мужчины</div>
            <ul>
                <li>Мужская стрижка <span className={styles.addInfo}>(мытье волос + 200 рублей)</span> — <span className={styles.cost}>1600 Р.(средние), 1800 Р.(длинные)</span></li>
                <li>Стрижка машинкой — <span className={styles.cost}>800 Р.</span></li>
                <li>Моделирование бороды/усов — <span className={styles.cost}>1400 Р.</span></li>
                <li>Коррекция бороды/усов — <span className={styles.cost}>800 Р.</span></li>
                <li>Камуфляж седины — <span className={styles.cost}>1400 Р.</span></li>
            </ul>
        </div>
    )
}

const NailService = () => {
    return (
        <div className={styles.content__container}>
            <div className={styles.sectionName}>Ногтевой сервис</div>
            <div className={styles.service}>Маникюр</div>
            <ul>
                <li>Женский маникюр <span className={styles.addInfo}>(аппаратный, классический, комбинированный)</span> — <span className={styles.cost}>1400 Р.</span></li>
                <li>Мужской маникюр — <span className={styles.cost}>1400 Р.</span></li>
                <li>Покрытие ногтей лаком/Vinylux — <span className={styles.cost}>500/600 Р.</span></li>
                <li>Покрытие ногтей гель-лаком — <span className={styles.cost}>1400 Р.</span></li>
                <li>Покрытие ногтей гель-лаком «Френч», «Лунки» — <span className={styles.cost}>1600 Р.</span></li>
                <li>Маникюр с лечебным покрытием лаком — <span className={styles.cost}>1900 Р.</span></li>
                <li>SPA маникюр <span className={styles.addInfo}>(обработка ногтей и кутикул, пилинг, маска и массаж)</span> — <span className={styles.cost}>2000 Р.</span></li>
                <li>Экспресс SPA-уход <span className={styles.addInfo}>(пилинг, маска)</span> — <span className={styles.cost}>600 Р.</span></li>
                <li>Наращивание ногтей <span className={styles.addInfo}>(с покрытием гель-лаком в один тон, «Френч»)</span> — <span className={styles.cost}>5000 Р.</span></li>
                <li>Коррекция искусственных ногтей <span className={styles.addInfo}>(с покрытием гель-лаком в один тон, «Френч»)</span> — <span className={styles.cost}>3000 Р.</span></li>
            </ul>
            <div className={styles.service} style={{ marginTop: "30px" }}>Педикюр</div>
            <ul>
                <li>Женский педикюр <span className={styles.addInfo}>(аппаратный, комбинированный)</span> — <span className={styles.cost}>2500 Р.</span></li>
                <li>Мужской педикюр <span className={styles.addInfo}>(аппаратный, комбинированный)</span> — <span className={styles.cost}>2800 Р.</span></li>
                <li>Экспресс педикюр <span className={styles.addInfo}>(обработка только пальцев)</span> — <span className={styles.cost}>1500 Р.</span></li>
                <li>SPA педикюр <span className={styles.addInfo}>(обработка ногтей, кутикул, стоп, пилинг, маска и массаж)</span> — <span className={styles.cost}>3000 Р.</span></li>
                <li>Обработка вросшего ногтя — <span className={styles.cost}>от 400 Р.</span></li>
                <li>Обработка стержневых мозолей — <span className={styles.cost}>400 Р.</span></li>
                <li>Педикюр Golden Trace — <span className={styles.cost}>2600 Р.</span></li>
            </ul>
            <div className={styles.service} style={{ marginTop: "30px" }}>Дополнительные услуги</div>
            <ul>
                <li>Снятие лака — <span className={styles.cost}>150 Р.</span></li>
                <li>Снятие гель-лака — <span className={styles.cost}>450 Р.</span></li>
                <li>Снятие искусственных ногтей — <span className={styles.cost}>700 Р.</span></li>
                <li>Реставрация ногтей <span className={styles.addInfo}>(за 1 ноготь)</span> — <span className={styles.cost}>400 Р.</span></li>
                <li>Укрепление/выравнивание ногтей — <span className={styles.cost}>400 Р.</span></li>
                <li>Дизайн ногтей №1 <span className={styles.addInfo}>(втирки, битое стекло, фольга)(за 1 ноготь)</span> — <span className={styles.cost}>от 50 Р.</span></li>
                <li>Дизайн ногтей №2 <span className={styles.addInfo}>(градиент)(за 1 ноготь)</span> — <span className={styles.cost}>от 80 Р.</span></li>
                <li>Дизайн ногтей №3 <span className={styles.addInfo}>(художественная роспись)(за 1 ноготь)</span> — <span className={styles.cost}>от 300 Р.</span></li>
                <li>Укрепление ногтей IBX — <span className={styles.cost}>500 Р.</span></li>
                <li>Инкрустация стразами <span className={styles.addInfo}>(за 1 ноготь)</span> — <span className={styles.cost}>700 Р.</span></li>
                <li>Дизайн ногтей стразами <span className={styles.addInfo}>(за 1 йод.)</span> — <span className={styles.cost}>50 Р.</span></li>
            </ul>
        </div>
    )
}


const price = [
    HairService,
    NailService,
]

const Tab = (props) => {


    return (
        <div>
            <div className={`${styles.tab__wrapper} ${props.activeTab === props.id ? styles.activeTab : ""}`}
                onClick={() => {
                    props.setContent(price[props.id]);
                    props.setActiveTab(props.id);
                }}
            >{props.name}</div>
        </div>
    )
}

export default Tab;