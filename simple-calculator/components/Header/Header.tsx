import React, { FC, useState } from 'react';

interface TitleProps {
  title: string;
  subtitle: string,
}

const Header: React.FC<TitleProps> = ({ title, subtitle }) => {
  const [titleValue, setTitleValue] = useState<string>();
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  };
  
  export default Header;