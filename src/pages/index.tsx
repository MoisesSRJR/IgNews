import Head from 'next/head'
import { SubscribeNow } from '../common/components/SubscribeButton'
import { ContentContainer, Hero } from './home.styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <ContentContainer>
        <Hero>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeNow />
        </Hero>

      <img src='/images/avatar.svg' alt='Girl coding'/>
      </ContentContainer>
    </>
  )
}
