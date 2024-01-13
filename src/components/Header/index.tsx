import React from 'react';
import Image from "next/image";
import {BASKET_ROUTE, PROFILE_ROUTE} from "@/utils/consts";
import styles from './style.module.scss'

const Header = () => {
    return (
            <header className={styles.header}>
                <a>
                    <Image
                        src="/iconSearch.svg"
                        alt="Корзина"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
                <a href={BASKET_ROUTE}>
                    <Image
                        src="/iconBusket.svg"
                        alt="Корзина"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
                <a href={PROFILE_ROUTE}>
                    <Image
                        src="/iconProfile.svg"
                        alt="Корзина"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
            </header>
    );
};

export default Header;