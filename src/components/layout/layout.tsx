import { useState } from "react";
import ContactSection from "./contacts";
import Navbar from "./navbar";

type interfaceProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: interfaceProps) => {
  const [color, setColor] = useState("dark");
  const changeColor = (color: string) => {
    setColor(color);
  };

  return (
    <>
      <main className={color}>
        <div className="flex-col dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-900">
          <Navbar color={color} setColor={changeColor} />
          <div className="flex">
            <ContactSection />
            <section className="dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-900 m-auto">
              {children}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
