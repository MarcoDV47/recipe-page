const Ingredients = (props) => {

    const array = props.ingredients;

    return (
        <div className="ingredients">
            <h2>Ingredientes</h2>
            <ul>
                {array && array.map((e, i) => {
                    return (
                        <li key={i}>{e}</li>
                    )
                })}
            </ul>
            <hr />
        </div>
    )
}

export default Ingredients;