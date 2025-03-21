import Head from "next/head";
import { Fragment } from "react";
import EliteBooyahPass from "@containers/elite-booyah-pass";

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>{"Get Diamonds"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9600659467567882"
          crossorigin="anonymous"></script>
      </Head>
      <div

      >
        <EliteBooyahPass />
      </div>
    </Fragment>
  );
}
