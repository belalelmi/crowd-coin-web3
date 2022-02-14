import React from 'react'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'
import Header from './Header'

const Layout = (props) => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {props.children}
    </Container>
  )
}

export default Layout
