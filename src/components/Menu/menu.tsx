import {Menu, Transition} from '@headlessui/react'
import React from "react";
import styles from "./style.module.scss"

export function DropBox() {
    return (
        <div>
            <Menu>
                <div className={styles.menu}>
                    <Menu.Button className={styles.menuButton}>More</Menu.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className={styles.items}>
                            <Menu.Item>
                                {({active}) => (
                                    <a
                                        className={`${active && 'bg-blue-500'}`}
                                        href="/login"
                                    >
                                        Account settings
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <a
                                        className={`${active && 'bg-blue-500'}`}
                                        href="/account-settings"
                                    >
                                        Documentation
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item disabled>
                                <span className="opacity-75"></span>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </div>
            </Menu>
        </div>

    )
}