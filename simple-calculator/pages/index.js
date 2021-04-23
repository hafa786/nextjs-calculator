import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a software engineer in video software industry in Finland.</p>
        <p>
          In this project we are gonna make a simpple calculator using xState,
          React, Typescript and Nextjs.
        </p>
      </section>
    </Layout>
  )
}
