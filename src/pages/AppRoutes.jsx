import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeCard from "../components/RecipeCard/RecipeCard.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/recipe-page" element={<RecipeCard />} />
                <Route path="/recipe-page/recipe/:id" element={<RecipeCard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;