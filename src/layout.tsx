import getConfig from 'next/config'
import styles from '../styles/Home.module.css'
import {Head} from 'next-utils/head'
import Image from "next/image"
import {ReactNode} from "react";
import {Menu, Nav} from "next-utils/nav"
import layoutCss from "./layout.css"

// Force layout.css above to be applied
function styleRef() { return layoutCss }

export default function Layout({ menus, children, }: { menus: Menu[], children: ReactNode }) {
    const description = "On Saturday, November 12, 2022, local officials, advocates, and citizens gathered for a rally opposing Governor Murphy's ill-advised, exorbitantly expensive highway expansion plan through the heart of Jersey City."
    const url = "https://neighbor-ryan.org/turnpiketrap"
    const thumbnail = `${url}/img/solomon-screenshot.jpeg`
    const { publicRuntimeConfig: config } = getConfig()
    const { basePath = "" } = config

    return (
        <div className={styles.container}>
            <Head {...{
                title: "NJ Turnpike Trap Rally",
                description,
                url,
                thumbnail,
            }}/>

            <Nav id={"nav"} classes={`collapsed`} menus={menus}>
                <a href={"https://github.com/neighbor-ryan/turnpiketrap"} className={"menu logo"} target={"_blank"} rel={"noreferrer"}>
                    <Image alt={"GitHub logo"} src={`${basePath}/gh-wb.png`} width={48} height={48} />
                </a>
            </Nav>

            <main className={styles.main}>
                <div className={styles['main-div']}>
                    {children}
                </div>
            </main>
        </div>
    )
}
