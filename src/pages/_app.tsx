import "../styles/globals.css";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
