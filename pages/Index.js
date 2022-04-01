import Layout from '../components/Layout'
import fetch from "isomorphic-unfetch"
import Head from "next/head"
import List from '../components/List'

const Index = (props) => {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <h1>List</h1>
                <List data={props.data} />
            </div>
        </Layout>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch("your_api_url")
    const resJSON = await res.json()
    return {
        data: resJSON,
    }
}

export default Index