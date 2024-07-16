import {  HashRouter, Route, Routes } from "react-router-dom";
import RecipeCard from "../components/RecipeCard/RecipeCard.jsx";

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<RecipeCard />} />
                <Route path="/recipe/:id" element={<RecipeCard />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;