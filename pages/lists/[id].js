import { useRouter } from "next/router"
import fetch from "isomorphic-unfetch"
import Layout from "../../components/Layout"

const ListContent = ({ data }) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <Layout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            ID: {data.id}
                        </div>
                        <div className="card-body text-center">
                            <h4>
                                Prop1: {data.prop1}
                            </h4>
                            <h4>
                                Prop2: {data.prop2}
                            </h4>
                            <h4>
                                Prop3: {data.prop3}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

ListContent.getInitialProps = async (ctx) => {
    const res = await fetch(`your_api_url/${ctx.query.id}`)
    const resJSON = await res.json()
    return { data: resJSON }

}

export default ListContent