import styled from "styled-components";
import { Link } from "react-router-dom";

const NavButtons = ({ handleClick, id = 1 }) => {
  return (
    <Nav>
      <StyledLink onClick={handleClick} className={id == 1 && "hidden"} to={`/recipe-page/recipe/${id - 1}`}>Voltar</StyledLink>
      <StyledLink onClick={handleClick} className={id == 3 && "hidden"} to={`/recipe-page/recipe/${Number(id) + 1}`}>Próximo</StyledLink>
    </Nav>
  )
}

const Nav = styled.nav`
background-color:var(--neutral-2);
border-radius: 15px;
padding: 15px;
margin-bottom: 10px;
`

const StyledLink = styled(Link)`
  color: var(--primary-2);
  font-weight: bold;
  font-size: 0.8em;
  text-decoration: none;
  &.hidden{
    visibility: hidden;
  }
`;

export default NavButtons;