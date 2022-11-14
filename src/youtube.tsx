import {useRef} from 'react';
import css from "./youtube.module.css"

export type Props = {
    video: string;
    width: number | string,
    height: number | string,
    thumbnailQuality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'hq720'
}

export default function YouTubeFrame({video, width, height, thumbnailQuality = 'hq720'}: Props) {
    const divRef = useRef<HTMLDivElement|null>(null);

    const onClick = () => {
        console.log("click")
        const iframe = document.createElement( "iframe" );
        iframe.classList.add(css["yt-video"])
        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "1");
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        // iframe.style.width = width.toString();
        // iframe.style.height = height.toString();
        iframe.setAttribute( "src", `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1` );
        if (divRef.current) {
            divRef.current.innerHTML = "";
            divRef.current.appendChild(iframe);
        }
    }


    return (
        <div ref={divRef} className={`${css["yt-container"]} youtube-frame`}>
            <span className="ti-control-play position-absolute display-1 text-white" />
            <img className={`${css["yt-video"]} shadow`} onClick={onClick} loading="lazy" src={`https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`} alt="YouTube Video Thumbnail"/>
            <span onClick={onClick} className={css['yt-logo']} />
        </div>
    );
}
