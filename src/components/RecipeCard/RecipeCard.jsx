import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';
import Ingredients from '../Ingredients/Ingredients';
import Instructions from '../Instructions/Instructions';
import Nutrition from '../Nutrition/Nutrition';
import PrepTime from '../PrepTime/PrepTime';
import NavButtons from '../NavButtons/NavButtons';

async function fetchRecipe(id = 1) {
    const response = await fetch(`data/recipe-${id}.json`);
    return await response.json();
}

const RecipeCard = () => {
    const [recipe, setRecipe] = useState({});

    function scrollTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    let { id } = useParams();

    useEffect(() => {
        async function getRecipe() {
            const recipes = await fetchRecipe(id);
            setRecipe(recipes);
        }

        getRecipe();
    }, [recipe])

    return (
        <section>
            <NavButtons handleClick={scrollTop} id={id} />
            <Header
                name={recipe.name}
                description={recipe.description}
                image={recipe.image}
            />
            <PrepTime prepInstructions={recipe.preparation} />
            <Ingredients ingredients={recipe.ingredients} />
            <Instructions instructions={recipe.instructions} />
            <Nutrition nutrition={recipe.nutrition} />
            <NavButtons handleClick={scrollTop} id={id} toTop={true} />
        </section>
    )
}
const StyledLink = styled(Link)`
  color: var(--primary-2);
  font-weight: bold;
  &.hidden{
    visibility: hidden;
  }
`;
export default RecipeCard;