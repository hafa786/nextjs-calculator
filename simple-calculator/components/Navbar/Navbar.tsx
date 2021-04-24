import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import style from './Navbar.module.css'

export const Navbar: React.FunctionComponent= () => {
    return (
      <div>
       <Head>
         <title>NextJs calculator</title>
       </Head>
       <section className={style.header}>
       <Image
          priority
          src="/images/profile.jpg"
          className={style.borderCircle}
          height={108}
          width={108}
        />
         <h3>Hafiz Muhammad Shahzad Sikandar</h3>
         <p>I am a software engineer in video software industry in Finland.</p>
         <p>
           In this project we are gonna make a simpple calculator using xState,
           React, Typescript and Nextjs.
         </p>
       </section>
     </div>
    );
  };
  