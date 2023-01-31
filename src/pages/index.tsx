import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { stripe } from '../common/infra/stripe/stripe'

import { SubscribeNow } from '../common/components/SubscribeButton'
import { ContentContainer, Hero } from './home.styles'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeNow  priceId={product.priceId}/>
        </Hero>
      <img src='/images/avatar.svg' alt='Girl coding'/>
      </ContentContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1MSK94AHzwMyGPgRiMTeyWtN', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price?.unit_amount / 100 ),
  };

  return {
    props: {
      product,
    }
  }
}