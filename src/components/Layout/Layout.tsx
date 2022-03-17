import { Fragment } from 'react';
import MainHeader from './MainHeader';
import { ReactNode } from 'react';

interface Iprops {
  children: ReactNode
}

const Layout = (props: Iprops) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
