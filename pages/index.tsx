import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {ReactNode} from "react";
import YouTubeEmbed from "../src/youtube";

type SpeakerFragment = {
  short: string
  fragment?: string
}

type Speaker = {
  title: string
  youtubeId: string
  children: ReactNode
} & SpeakerFragment
function makeFragment({ fragment, short }: SpeakerFragment) {
  return fragment || short.toLowerCase().replace(" ", "-")
}

const Divider = () => <hr className={styles.divider}/>

function Speaker({ title, short, fragment, youtubeId, children, }: Speaker) {
  fragment = makeFragment({ fragment, short })
  return <>
    <Divider />
    <h2 className={styles.speaker} id={fragment}><a href={`#${fragment}`} style={{ textDecoration: "none" }}>{title}</a></h2>
    <YouTubeEmbed video={youtubeId} alt={title} />
    {children}
  </>
}

const speakers = [
  { title: "Barkha Patel (Jersey City Director of Infrastructure, representing Mayor Steven Fulop)", short: "Director Patel", youtubeId: "WlbYvpe6CzM", children: <>
      <blockquote>
        <p>Billions of dollars have been invested into highway expansion projects, across the country, in the name of increased capacity.</p>
        <p>These projects have resulted in worsened conditions almost *immediately* after being completed.</p>
        <p>The Katy freeway in Houston, and the 405 in Los Angeles, are a couple of alarming examples.</p>
        <p>Increasing road capacity over time, will induce more demand, creating a vicious cycle of traffic, that we cannot build our way out of.</p>
        <p>It is the fundamental law of roadway congestion.</p>
        <p>As the federal government is finally coming to terms with the immense harm that these highway projects have caused, across the country,</p>
        <p>and is now allocating billions of dollars to repair and reconnect communities that have been torn apart by these highway projects,</p>
        <p>the state of New Jersey is moving in the opposite direction.</p>
        <p>This project, without a doubt, is on the wrong side of history.</p>
      </blockquote>
    </> },
  { title: "James Solomon (Jersey City Council, Ward E)", short: "Councilman Solomon", youtubeId: "GkriQVEHa2I", children: <>
      <blockquote>
        <p>Good afternoon! How's everyone doing?</p>
        <p>I hope you're good, but I also hope you're mad, 'cause this is one of the worst ideas in Hudson County in recent memory.</p>
        <p>You see here, my daughter Noelle. That (<a href={"https://goo.gl/maps/z3qC5ZsHd7NxUTjH8"}>PS5</a>) will be her elementary school, as it is my oldest daughter's elementary school.</p>
        <p><a href={"https://goo.gl/maps/qrmcKpfpk238mvvE7"}>That</a> <strong>IS</strong> her playground, as it is my other two children's playground.</p>
        <p>Expanding this Turnpike to, literally, hang over that playground, and that school, is a terrible idea.</p>
        <p>It will make the air she breathes worse.</p>
        <p>Study after study shows, the education she gets: worse.</p>
        <p>And for what reason? So we can light billions of dollars on fire? 'Cause that's what highway expansion is.</p>
        <p>Houston, LA, Every place they spend billions of dollars on highway expansion, traffic does not get better!</p>
        <p>Traffic gets? (WORSE!)</p>
        <p>Traffic gets? (WORSE!)</p>
        <p>My message is simple:</p>
        <p>if anyone wants to be a leader of this state,</p>
        <p>or a leader of this country,</p>
        <p>you can't fight for projects that make climate change worse.</p>
        <p>It ain't 1980, it ain't 1990, it ain't 2000.</p>
        <p>It is 2022, we have seen the effects of climate change.</p>
        <p>So the message to Governor Murphy, to every single person supporting this project, is: rethink this.</p>
        <p>You're not going to make anyone's lives better, and in fact you're going to rip through the fabric of this city.</p>
        <p>We're saying (hell no!) hell no we are not gonna expand this turnpike.</p>
        <p>Thank you.</p>
      </blockquote>
    </>, },
  { title: "Frank \"Educational\" Gilmore (Jersey City Council, Ward F)", short: "Councilman Gilmore", youtubeId: "lDtoiNkmi-I", children: <>
      <blockquote>
        <p>Sometimes, in politics, things are in a grey area, but if I've ever seen something more black and white than this extension, I don't know what it is.</p>
        <p>It just doesn't make sense, financially… in fact, if you need to find something to do with 5 billion dollars, I have a few suggestions.</p>
        <p>So, logically it doesn't make sense: you want to move the flow of traffic, but you're not making another tunnel, so the traffic is going to be congested, regardless.</p>
        <p>We're going to send a message to Trenton and the message is simple:</p>
        <p><strong>do not pollute,</strong></p>
        <p><strong>do not congest,</strong></p>
        <p><strong>do not increase,</strong></p>
        <p><strong>and do not expand.</strong></p>
        <p>It is as simple as that.</p>
      </blockquote>
    </>, },
  { title: "Yousef Saleh (Jersey City Council, Ward D)", short: "Councilman Saleh", youtubeId: "7rEXA3jmOWk", children: <>
      <blockquote>
        <p>We need to make sure that the $4.7BN is going into more shuttle buses, more bike lanes, more environmentally sustainable forms of transportation.</p>
        <p>We need to be planning for the future.</p>
        <p>We should build a pedestrian bridge to New York City! Why not? Why not?! Right?</p>
        <p>Like, $4.7BN could get you a bridge to the moon!</p>
        <p>40% of pollution in New Jersey comes from car exhaust.</p>
        <p>When you tell me you're gonna expand the Turnpike, in Ward D, that's gonna make my residents breathe a little harder.</p>
        <p>Those asthma rates are gonna keep going up.</p>
        <p>Let's go Jersey City! Let's not expand that Turnpike! Let's be for smart government! Thank you!</p>
      </blockquote>
    </>, },
  { title: "Bill O'Dea (Hudson County Commissioner, District 2)", short: "Commissioner O'Dea", youtubeId: "mQE1GCbh4Kc", children: <>
      <blockquote>
        <p>I grew up on Baldwin Avenue and I could always see this [turnpike].</p>
        <p>This was ugly in the 70's, it's still ugly today.</p>
        <p>Expanding it is probably the dumbest thing anyone could ever think of.</p>
        <p>[Governor] Phil Murphy, who's a friend, should just come one day, and just walk.</p>
        <p>And after he walks about a mile, and sees the impact it's gonna have, on existing properties, on a public housing site, on Ferris high school…</p>
        <p>I think he would realize… "that's it, kill the idea."</p>
        <p>Look, I'm in favor of good public works projects. We need them.</p>
        <p>We certainly have a lot of need for investment, even locally, in our mass transit.</p>
        <p>We have opportunities to expand our light rail to other parts of, even the West Side of Jersey City.</p>
        <p>So let's take those dollars, divert them into good public works projects, take them away from bad public works projects.</p>
        <p>And let's get the Governor to do the right thing.</p>
      </blockquote>
    </>, },
  { title: "Anthony Romano (Hudson County Commissioner, District 5)", short: "Commissioner Romano", youtubeId: "Xjqm5JxU3Sk", children: <>
      <blockquote>
        <p>The Turnpike Authority has to come down and realize that there's different ways to do what they're trying to accomplish.</p>
        <p>We cannot afford more pollution.</p>
        <p>We cannot afford more traffic.</p>
      </blockquote>
    </>, },
  { title: "Phil Cohen (Hoboken City Council, 5th Ward)", short: "Councilman Cohen", youtubeId: "qyHJ4eV3YNk", children: <>
      <blockquote>
        <p>I think we all agree that investing in infrastructure is smart. It makes sense.</p>
        <p>Gateway project: makes sense.</p>
        <p>Having more tunnels into NYC: makes sense.</p>
        <p>Investing in mass transit: makes sense</p>
        <p>These are good ideas.</p>
        <p>But, to spend $5BN on this project, doesn't make sense.</p>
        <p>We are not looking for it, we don't want it, we're here with you, we support you,</p>
        <p>Hoboken is in the house, keep up the good work everybody.</p>
      </blockquote>
    </>, },
  { title: "Jimmy Lee (President, Safe Streets JC)", short: "Jimmy Lee", youtubeId: "7oxrvd39Di8", children: <>
      <blockquote>
        <p>It's November 12th.</p>
        <p>It's 70°.</p>
        <p>I'm a parent of a young child.</p>
        <p>What do we think the temperature is going to be in November of 2030?</p>
        <p>In November, of 2050?</p>
        <p>We want to cut climate change in half by 2030; how can we be building more highways?</p>
        <p>Governor Murphy: please follow the science! Thank you.</p>
      </blockquote>
    </>, },
  { title: "Chris Adair (President, Bike Hoboken)", short: "Chris Adair", youtubeId: "fDFdAWzIQz0", children: <>
      <blockquote>
        <p>It's gonna bring more cars to our streets. More traffic.</p>
        <p>And it's going to increase air pollution.</p>
        <p>Hudson County already has an "F" rating in air quality. and this is expansion is only going to poison our air even more.</p>
        <p>If Governor Murphy was truly serious about his goal of reducing greenhouse gases by 50%, he would say no to the Turnpike expansion.</p>
        <p>$5BN could pay for a whole hell of a lot more sustainable projects like light rail, like bus rapid transit lanes, and like more bike lanes!</p>
        <p>So let's focus on **moving people, not cars.**</p>
        <p>And we want Governor Murphy to hear us loud and clear when we say **"NO"** to his Turnpike expansion.</p>
        <p>Thank you.</p>
      </blockquote>
    </>, },
  { title: "John Reichman (President, Empower NJ)", short: "John Reichman", youtubeId: "pP37lWJv-rI", children: <>
      <blockquote>
        <p>When I tell people about Governor Murphy's Turnpike expansion, the initial response is a saltier version of: "are you kidding me?"</p>
        <p>How can you approve a project that makes no sense, on any level?</p>
        <p>It's going to increase pollution.</p>
        <p>It's going to increase greenhouse gases.</p>
        <p>It's exorbitantly expensive. They say it's $5BN, we know it's gonna be a lot more than that.</p>
        <p>And they haven't looked at any alternatives, for public transportation, or anything else, other than building a bigger highway.</p>
        <p>All over the country, people are beating back highway projects.</p>
        <p>A highway project from California, from the Port of Long Beach: Killed. Instead, they're expanding rail.</p>
        <p>Highway projects in the Denver metro area: Killed.</p>
        <p>An expansion of I-95, in Connecticut: Killed.</p>
        <p>We have to do the same thing here.</p>
      </blockquote>
    </>, },
  { title: "Tony Borelli (Vice President, Bike JC)", short: "Tony Borelli", youtubeId: "eyhFVQhJhMU", children: <>
      <blockquote>
        <p>For 25 years now, I've lived right next to a really busy highway, with all of its inherent ills.</p>
        <p>But, you know, I knew what I signed up for, and I stayed here for a quarter of a century.</p>
        <p>But all along, I always thought no one would ever be foolish and destructive enough</p>
        <p>to try to make this thing bigger, to make it worse, make it dirtier, more dangerous, noisier, more polluting.</p>
        <p>And yet, here we are.</p>
        <p>In an era where some cities are tearing down their freeways, there are some unaccountable bureaucrats at the state level who want to go the opposite way with this thing.</p>
      </blockquote>
      <h3>Closing</h3>
      <blockquote>
        <p>If you go to "@turnpiketrap", you can email, you can leave voicemails for Governor Murphy himself, and I urge you to do that as well because, we would stress again, that is probably the one person's mind we most need to change. "@GovMurphy"</p>
        <p>Thank you again for coming, and enjoy the rest of the afternoon.</p>
      </blockquote>
    </>, },
]

const Home: NextPage = () => {
  const title = "Rally Against Governor Murphy's $4.7B Turnpike Expansion Through Jersey City"
  const description = "On Saturday, November 12, 2022, local officials, advocates, and citizens gathered for a rally opposing Governor Murphy's ill-advised, exorbitantly expensive highway expansion plan through the heart of Jersey City."
  const domain = "https://turnpiketrap.bikejc.org"
  const thumbnail = `${domain}/img/solomon-screenshot.jpeg`
  return (
      <div className={styles.container}>
        <Head>
          <title>NJ Turnpike Trap Rally</title>
          <link rel="icon" href="/img/favicon.jpeg" />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={domain} />
          <meta property="og:image" content={thumbnail} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={thumbnail} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <main className={styles.main}>
          <div className={styles['main-div']}>
            <h1 className={styles.title}>{title}</h1>
            <p>On Saturday, November 12, 2022, local officials, advocates, and citizens gathered for a rally opposing Governor Murphy's ill-advised, exorbitantly expensive highway expansion plan through the heart of Jersey City.</p>
            <p>See excerpted speeches below, and <strong>visit <a href={"https://turnpiketrap.org"}>turnpiketrap.org</a> to learn more and get involved.</strong></p>
            <details>
              <summary>Direct links to speakers</summary>
              <ul className={styles['index-list']}>
                {speakers.map(speaker => <li key={speaker.short}><a href={`#${makeFragment(speaker)}`}>{speaker.title}</a></li>)}
              </ul>
            </details>
            {speakers.map(speaker => <Speaker key={speaker.short} {...speaker} />)}
            <Divider />
            <p><strong><a href={"https://turnpiketrap.org"}>Visit turnpiketrap.org</a> to learn more and get involved.</strong></p>
          </div>
        </main>
      </div>
  )
}

export default Home
