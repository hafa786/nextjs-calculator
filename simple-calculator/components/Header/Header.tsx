import React, { FC, useState } from 'react';
import Head from 'next/head';

interface TitleProps {
  text: string;
}

const Header: React.FC<TitleProps> = ({ text }) => {
  const [titleValue, setTitleValue] = useState<string>();
    return (
      <div>
        <Head>
          <title>{text}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    );
  };
  
  export default Header;