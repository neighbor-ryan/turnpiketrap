import {vars} from "next-utils/contract.css"
import {createTheme} from '@vanilla-extract/css'

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
