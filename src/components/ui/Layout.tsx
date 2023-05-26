import { Fragment, ReactNode } from "react";
import Header from "../page/Header.page";
import Footer from "../page/Footer.page";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
