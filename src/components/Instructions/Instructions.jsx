import styled from 'styled-components'

const Instructions = (props) => {

    const array = props.instructions;

    return (
        <div className="instructions">
            <h2>Instruções</h2>
            <ol>
                {array && array.map((e, i) => {
                    return (
                        <li key={i}><P>{e}</P></li>
                    )
                })}
            </ol>
        </div>
    )
}
const P = styled.p`
    display: inline;
    margin-left: 10px;
`

export default Instructions;