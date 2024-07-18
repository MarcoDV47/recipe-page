import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';
import Ingredients from '../Ingredients/Ingredients';
import Instructions from '../Instructions/Instructions';
import Nutrition from '../Nutrition/Nutrition';
import PrepTime from '../PrepTime/PrepTime';
import NavButtons from '../NavButtons/NavButtons';
import { recipes } from '../../../data/recipes';

function fetchRecipe(id = 1) {
    return recipes[id - 1];
}

const RecipeCard = () => {

    function scrollTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    let { id } = useParams();

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        function getRecipe() {
            const recipes = fetchRecipe(id);
            setRecipe(recipes);
        }

        getRecipe();
    }, [id])

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

export default RecipeCard;