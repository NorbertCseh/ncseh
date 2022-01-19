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
        <div className="flex dark:bg-indigo-900 dark:text-indigo-100 bg-indigo-100 text-indigo-900">
          <ContactSection />
          <div className="flex-col w-screen">
            <Navbar color={color} setColor={changeColor} />
            <section className="dark:bg-indigo-900 dark:text-indigo-100 bg-indigo-100 text-indigo-900">
              {children}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
