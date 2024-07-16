import Table from "../Table/Table";

const Nutrition = (props) => {
    const nutrition = props.nutrition;

    return (
        nutrition &&
        <div className="nutrition">
        <hr/>
            <h2>Informação Nutricional</h2>

            <p>{nutrition && nutrition.description}</p>
            <Table tableValues={nutrition} />
        </div>
    )
}

export default Nutrition;