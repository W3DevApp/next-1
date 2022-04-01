import Router from "next/router"

const List = (props) => {
    return (
        <div>
            <ul className="list-group">
                {props.data.map((dat) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" key={dat.id} onClick={e => Router.push(`/lists/[id]`, `/lists/${dat.id}`)}>
                        <div>
                            <h5>
                                {dat.id}
                            </h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List