import React from 'react';
import { TopMenu } from "./TopMenu";
import { Logo } from "./Logo";
import '../Styles/Header.css'


export const Header = () => {
  return (
    <header className="header-setting">
      <TopMenu />
      <Logo />
    </header>
  );
};