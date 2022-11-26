import styles from "./theme.module.css";
import {ReactNode} from "react";
import {header} from "next-utils/md.css.js"

export const Divider = () => <hr className={styles.divider}/>

export const Id = ({ children }: { children: string }) => <a id={children} />

export const H2 = ({ id, link = true, children }: { id?: string, link?: boolean, children: ReactNode }) => {
    return <h2 id={id} className={header}>{
        (id && link) ? <a href={`#${id}`}>{children}</a> : children
    }</h2>
}
