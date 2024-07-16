import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeCard from "../components/RecipeCard/RecipeCard.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="https://marcodv47.github.io/recipe-page/" element={<h1>teste</h1>} />
                <Route path="/recipe-page/recipe/:id" element={<RecipeCard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;