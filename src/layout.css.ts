import {vars} from "next-utils/contract.css"
import {createTheme, globalStyle} from '@vanilla-extract/css'
import {header} from "next-utils/md.css"

/*
 * Unused, example of how to customize the <Nav/> component's styling. Pass this to component in `layout.tsx` like:
 *
 * ```tsx
 * import {exampleTheme} from "./layout.css"
 * …
 * function Layout(…) {
 *   …
 *   return (
 *     …
 *     <Nav theme={exampleTheme} … />
 *     …
 *   )
 * ```
 */
export const exampleTheme = createTheme(vars, {
    color: "red",
    backgroundColor: "yellow",
    linkColor: "blue",
})

globalStyle(`.${header}`, {
    textDecoration: "none !important",
})

export default { header }
