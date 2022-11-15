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
    blockquote?: boolean
    children: ReactNode
} & SpeakerFragment

export function makeFragment({ fragment, short }: SpeakerFragment) {
    return fragment || short.toLowerCase().replace(" ", "-")
}

export function Speaker({ title, short, fragment, youtubeId, blockquote = true, children, }: Speaker) {
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
