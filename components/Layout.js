import Navigation from "./Navigation"
import Head from "next/head"

const Container = (props) => (
  <div>
    <Head>
      <title>NEXT-1</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"
      />
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
)

export default Container