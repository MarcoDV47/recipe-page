import styled from 'styled-components'

const PrepTime = (props) => {
    const array = props.prepInstructions;

    return (
        array &&
        <Div>
            <h3>Tempo de preparação</h3>
            <ul>
                {array && array.map((element, i) => {
                    return (
                        <Li key={i}>{element}</Li>
                    )
                })}
            </ul>
        </Div>
    )
}

const Div = styled.div`
background-color: var(--neutral-2);
border-radius: 10px;
padding: 20px 25px 1px;
`
const Li = styled.li`
    &::marker {
        color: var(--primary-2)
    }
`
export default PrepTime;