import {ReactNode} from "react";
import YouTubeEmbed from "./youtube";
import {Divider, H2} from "./theme";
import Markdown from "./md";

export type SpeakerFragment = {
    short: string
    fragment?: string
}

export type Speaker = {
    title: string
    youtubeId: string
    children: ReactNode
} & SpeakerFragment

export function makeFragment({ fragment, short }: SpeakerFragment) {
    return fragment || short.toLowerCase().replace(" ", "-")
}

export function Speaker({ title, short, fragment, youtubeId, children, }: Speaker) {
    fragment = makeFragment({ fragment, short })
    if (typeof children === 'string') {
        children = Markdown(children)
    }
    return <>
        <Divider />
        <H2 id={fragment}>{title}</H2>
        <YouTubeEmbed video={youtubeId} alt={title} />
        {children}
    </>
}
