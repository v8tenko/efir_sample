import styles from "./Tab.module.css";

export const HairService = () => {
    return (
        <div>
            <div className={styles.title}>Стрижка</div>
            <div>
                <div className={styles.subtitle}>Женщины</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Женская стрижка + укладка (без мытья)</div>
                <div className={styles.elemCost}>8900 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Женская стрижка (без мытья)</div>
                <div className={styles.elemCost}>6200 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Стрижка челки</div>
                <div className={styles.elemCost}>1000 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Окантовка</div>
                <div className={styles.elemCost}>3400 Р</div>
            </div>
            <div className={styles.end}></div>
            {/* ____ */}
            <div>
                <div className={styles.subtitle}>Мужчины</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Стрижка мужская (без мытья)</div>
                <div className={styles.elemCost}>5100 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Окантовка мужская</div>
                <div className={styles.elemCost}>1900 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Стрижка бороды и усов</div>
                <div className={styles.elemCost}>1700 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Стрижка детская (до 8 лет)</div>
                <div className={styles.elemCost}>3000 Р</div>
            </div>
            <div className={styles.end}></div>
            {/* ____ */}

        </div>
    )
}

const NailService = () => {
    return (
        <div>
            <div className={styles.title}>Маникюр</div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Покрытие ногтей Vinylux</div>
                <div className={styles.elemCost}>500 — 600 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Маникюр с лечебным покрытием лаком</div>
                <div className={styles.elemCost}>1100 — 1200 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Мужской маникюр</div>
                <div className={styles.elemCost}>от 1000 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Покрытие ногтей гель-лаком</div>
                <div className={styles.elemCost}>1000 — 1400 Р</div>
            </div>
            <div className={styles.end}></div>
            {/* ____ */}
            <div className={styles.title}>Маникюр</div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Покрытие ногтей Vinylux</div>
                <div className={styles.elemCost}>500 — 600 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Маникюр с лечебным покрытием лаком</div>
                <div className={styles.elemCost}>1100 — 1200 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Мужской маникюр</div>
                <div className={styles.elemCost}>от 1000 Р</div>
            </div>
            <div className={styles.elem}>
                <div className={styles.elemName}>Покрытие ногтей гель-лаком</div>
                <div className={styles.elemCost}>1000 — 1400 Р</div>
            </div>
            <div className={styles.end}></div>
            {/* ____ */}

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