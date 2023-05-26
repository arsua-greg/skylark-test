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
      <main className="max-w-[1120px] mx-auto md:mt-16 mt-8 lg:px-5 px-5 md:pb-24 pb-6">
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}
