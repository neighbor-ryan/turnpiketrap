import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {ReactNode} from "react";
import YouTubeFrame from "../src/youtube";
import css from "./index.module.css"
import Script from "next/script";

function Speaker({ title, fragment, youtubeId, children, }: {
  title: string
  fragment: string
  youtubeId: string
  children: ReactNode
}) {
  return <>
    <h2 id={fragment}>{title}</h2>
    <YouTubeFrame video={youtubeId} width={560} height={315} />
    {/*<div className={css["yt-container"]}>*/}
    {/*  <iframe*/}
    {/*      className={css['yt-iframe']}*/}
    {/*      src={`https://www.youtube.com/embed/${youtubeId}`}*/}
    {/*      title={title}*/}
    {/*      frameBorder="0"*/}
    {/*      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
    {/*      allowFullScreen />*/}
    {/*</div>*/}
    {children}
  </>
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Rally Against Governor Murphy's $4.7B Turnpike Expansion Through Jersey City
        </h1>

        <h3>Intro</h3>
        <blockquote>So today we're gonna hear from an array of distinguished speakers, government and community leaders, representatives of allied civic advocacy groups.</blockquote>

        <Speaker title={"Barkha Patel (Jersey City Director of Infrastructure, representing Mayor Steven Fulop)"} fragment={"barkha-patel"} youtubeId={"WlbYvpe6CzM"}>
          <blockquote>
            Billions of dollars have been invested into highway expansion projects, across the country, in the name of increased capacity.

            These projects have resulted in worsened conditions almost *immediately* after being completed.

            The Katy freeway in Houston, and the 405 in Los Angeles, are a couple of alarming examples.

            Increasing road capacity over time, will induce more demand, creating a vicious cycle of traffic, that we cannot build our way out of.

            It is the fundamental law of roadway congestion.

            As the federal government is finally coming to terms with the immense harm that these highway projects have caused, across the country,

            and is now allocating billions of dollars to repair and reconnect communities that have been torn apart by these highway projects,

            the state of New Jersey is moving in the opposite direction.

            This project, without a doubt, is on the wrong side of history.
          </blockquote>
        </Speaker>

        <Speaker title={"James Solomon (Jersey City Council, Ward E)"} fragment={"james-solomon"} youtubeId={"GkriQVEHa2I"}>
          <blockquote>
            Good afternoon! How's everyone doing?

            I hope you're good, but I also hope you're mad, 'cause this is one of the worst ideas in Hudson County in recent memory.

            You see here, my daughter Noelle. That \[PS5\] will be her elementary school, as it is my oldest daughter's elementary school.

            That IS her playground, as it is my other two children's playground.

            Expanding this Turnpike to, literally, hang over that playground, and that school, is a terrible idea.

            It will make the air she breathes worse.

            Study after study shows, the education she gets: worse.

            And for what reason? So we can light billions of dollars on fire? 'Cause that's what highway expansion is.

            Houston, LA, Every place they spend billions of dollars on highway expansion, traffic does not get better!

            Traffic gets? (WORSE!)

            Traffic gets? (WORSE!)

            My message is simple:

            if anyone wants to be a leader of this state,

            or a leader of this country,

            you can't fight for projects that make climate change worse.

            It ain't 1980, it ain't 1990, it ain't 2000.

            It is 2022, we have seen the effects of climate change.

            So the message to Governor Murphy, to every single person supporting this project, is: rethink this.

            You're not going to make anyone's lives better, and in fact you're going to rip through the fabric of this city.

            We're saying (hell no!) hell no we are not gonna expand this turnpike.

            Thank you.
          </blockquote>
        </Speaker>

        <Speaker title={"Frank \"Educational\" Gilmore (Jersey City Council, Ward F)"} fragment={"frank-gilmore"} youtubeId={"lDtoiNkmi-I"}>
          <blockquote>
            Sometimes, in politics, things are in a grey area, but if I've ever seen something more black and white than this extension, I don't know what it is.

            It just doesn't make sense, financially… in fact, if you need to find something to do with 5 billion dollars, I have a few suggestions.

            So, logically it doesn't make sense: you want to move the flow of traffic, but you're not making another tunnel, so the traffic is going to be congested, regardless.

            We're going to send a message to Trenton and the message is simple:

            do not pollute
            do not congest
            do not increase
            and do not expand.

            It is as simple as that.
          </blockquote>
        </Speaker>

        <Speaker title={"Yousef Saleh (Jersey City Council, Ward D)"} fragment={"yousef-saleh"} youtubeId={"7rEXA3jmOWk"}>
          <blockquote>
            We need to make sure that the $4.7BN is going into more shuttle buses, more bike lanes, more environmentally sustainable forms of transportation.

            We need to be planning for the future.

            We should build a pedestrian bridge to New York City! Why not? Why not?! Right?

            Like, $4.7BN could get you a bridge to the moon!

            40% of pollution in New Jersey comes from car exhaust.

            When you tell me you're gonna expand the Turnpike, in Ward D, that's gonna make my residents breathe a little harder.

            Those asthma rates are gonna keep going up.

            Let's go Jersey City! Let's not expand that Turnpike! Let's be for smart government! Thank you!
          </blockquote>
        </Speaker>

        <Speaker title={"Bill O'Dea (Hudson County Commissioner, District 2)"} fragment={"bill-o-dea"} youtubeId={"mQE1GCbh4Kc"}>
          <blockquote>
            I grew up on Baldwin Avenue and I could always see this \[turnpike\].

            This was ugly in the 70's, it's still ugly today.

            Expanding it is probably the dumbest thing anyone could ever think of.

            \[Governor\] Phil Murphy, who's a friend, should just come one day, and just walk.

            And after he walks about a mile, and sees the impact it's gonna have, on existing properties, on a public housing site, on Ferris high school…

            I think he would realize… "that's it, kill the idea."

            Look, I'm in favor of good public works projects. We need them.

            We certainly have a lot of need for investment, even locally, in our mass transit.

            We have opportunities to expand our light rail to other parts of, even the West Side of Jersey City.

            So let's take those dollars, divert them into good public works projects, take them away from bad public works projects.

            And let's get the Governor to do the right thing.
          </blockquote>
        </Speaker>

        <Speaker title={"Anthony Romano (Hudson County Commissioner, District 5)"} fragment={"anthony-romano"} youtubeId={"Xjqm5JxU3Sk"}>
          <blockquote>
            The Turnpike Authority has to come down and realize that there's different ways to do what they're trying to accomplish.

            We cannot afford more pollution.

            We cannot afford more traffic.
          </blockquote>
        </Speaker>

        <Speaker title={"Phil Cohen (Hoboken City Council, 5th Ward)"} fragment={"phil-cohen"} youtubeId={"qyHJ4eV3YNk"}>
          <blockquote>
            I think we all agree that investing in infrastructure is smart. It makes sense.

            Gateway project: makes sense.
            Having more tunnels into NYC: makes sense.
            Investing in mass transit: makes sense

            These are good ideas.

            But, to spend $5BN on this project, doesn't make sense.

            We are not looking for it, we don't want it, we're here with you, we support you,

            Hoboken is in the house, keep up the good work everybody.
          </blockquote>
        </Speaker>

        <Speaker title={"Jimmy Lee (President, Safe Streets JC)"} fragment={"jimmy-lee"} youtubeId={"7oxrvd39Di8"}>
          <blockquote>
            It's November 12th.

            It's 70°.

            I'm a parent of a young child.

            What do we think the temperature is going to be in November of 2030?

            In November, of 2050?

            We want to cut climate change in half by 2030; how can we be building more highways?

            Governor Murphy: please follow the science! Thank you.
          </blockquote>
        </Speaker>

        <Speaker title={"Chris Adair (President, Bike Hoboken)"} fragment={"chris-adair"} youtubeId={"fDFdAWzIQz0"}>
          <blockquote>
            It's gonna bring more cars to our streets. More traffic.

            And it's going to increase air pollution.

            Hudson County already has an "F" rating in air quality. and this is expansion is only going to poison our air even more.

            If Governor Murphy was truly serious about his goal of reducing greenhouse gases by 50%, he would say no to the Turnpike expansion.

            $5BN could pay for a whole hell of a lot more sustainable projects like light rail, like bus rapid transit lanes, and like more bike lanes!

            So let's focus on **moving people, not cars.**

            And we want Governor Murphy to hear us loud and clear when we say **"NO"** to his Turnpike expansion.

            Thank you.
          </blockquote>
        </Speaker>

        <Speaker title={"John Reichman (President, Empower NJ)"} fragment={"john-reichman"} youtubeId={"pP37lWJv-rI"}>
          <blockquote>
            When I tell people about Governor Murphy's Turnpike expansion, the initial response is a saltier version of: "are you kidding me?"

            How can you approve a project that makes no sense, on any level?

            It's going to increase pollution.

            It's going to increase greenhouse gases.

            It's exorbitantly expensive. They say it's $5BN, we know it's gonna be a lot more than that.

            And they haven't looked at any alternatives, for public transportation, or anything else, other than building a bigger highway.

            All over the country, people are beating back highway projects.

            A highway project from California, from the Port of Long Beach: Killed. Instead, they're expanding rail.
            Highway projects in the Denver metro area: Killed.
            An expansion of I-95, in Connecticut: Killed.

            We have to do the same thing here.
          </blockquote>
        </Speaker>

        <Speaker title={"Tony Borelli (Vice President, Bike JC)"} fragment={"tony-borelli"} youtubeId={"eyhFVQhJhMU"}>
          <blockquote>
            For 25 years now, I've lived right next to a really busy highway, with all of its inherent ills.

            But, you know, I knew what I signed up for, and I stayed here for a quarter of a century.

            But all along, I always thought no one would ever be foolish and destructive enough

            to try to make this thing bigger, to make it worse, make it dirtier, more dangerous, noisier, more polluting.

            And yet, here we are.

            In an era where some cities are tearing down their freeways, there are some unaccountable bureaucrats at the state level who want to go the opposite way with this thing.
          </blockquote>
          <h3>Closing</h3>
          <blockquote>
            If you go to "@turnpiketrap", you can email, you can leave voicemails for Governor Murphy himself, and I urge you to do that as well because, we would stress again, that is probably the one person's mind we most need to change. "@GovMurphy"

            Thank you again for coming, and enjoy the rest of the afternoon.
          </blockquote>
        </Speaker>
      </main>
    </div>
  )
}

export default Home
