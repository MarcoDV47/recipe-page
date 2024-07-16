const Table = (props) => {

    const nutritionValues = props.tableValues;
    let tableValues = null;

    if (nutritionValues && nutritionValues.table) {
        tableValues = nutritionValues.table.values;
    }


    return (
        <table>
            <tbody>
                <tr>
                    <td>Calorias</td>
                    <td>{nutritionValues && tableValues.calories}</td>
                </tr>
                <tr>
                    <td>Carboidratos</td>
                    <td>{nutritionValues && tableValues.carbs}</td>
                </tr>
                <tr>
                    <td>Proteínas</td>
                    <td>{nutritionValues && tableValues.protein}</td>
                </tr>
                <tr>
                    <td>Gordura</td>
                    <td>{nutritionValues && tableValues.fat}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;