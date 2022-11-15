import {ReactNode} from "react";
import YouTubeEmbed from "./youtube";
import {Divider, H2} from "./theme";
import Markdown from "./md";

export const speakers = {
    "Director Patel": "Barkha Patel (Jersey City Director of Infrastructure, representing Mayor Steven Fulop)",
    "Councilman Solomon": "James Solomon (Jersey City Council, Ward E)",
    "Councilman Gilmore": `Frank "Educational" Gilmore (Jersey City Council, Ward F)`,
    "Councilman Saleh": "Yousef Saleh (Jersey City Council, Ward D)",
    "Commissioner O'Dea": "Bill O'Dea (Hudson County Commissioner, District 2)",
    "Commissioner Romano": "Anthony Romano (Hudson County Commissioner, District 5)",
    "Councilman Cohen": "Phil Cohen (Hoboken City Council, 5th Ward)",
    "Jimmy Lee": "Jimmy Lee (President, Safe Streets JC)",
    "Chris Adair": "Chris Adair (President, Bike Hoboken)",
    "John Reichman": "John Reichman (President, Empower NJ)",
    "Tony Borelli": "Tony Borelli (Vice President, Bike JC)",
}

export type SpeakerFragment = {
    short: keyof typeof speakers
    fragment?: string
}

export type Speaker = {
    title?: string
    youtubeId: string
    blockquote?: boolean
    children: ReactNode
} & SpeakerFragment

export function makeFragment({ fragment, short }: SpeakerFragment) {
    return fragment || short.toLowerCase().replace(" ", "-")
}

export function Speaker({ title, short, fragment, youtubeId, blockquote = true, children, }: Speaker) {
    title = title || speakers[short]
    fragment = makeFragment({ fragment, short })
    if (blockquote) {
        children = <blockquote>{children}</blockquote>
    }
    if (typeof children === 'string') {
        children = Markdown(children.toString())
    }
    return <>
        <Divider />
        <H2 id={fragment}>{title}</H2>
        <YouTubeEmbed video={youtubeId} alt={title} />
        {children}
    </>
}
