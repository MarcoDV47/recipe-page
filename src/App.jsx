import RecipeCard from './components/RecipeCard/RecipeCard.jsx'

function App() {


  return (
    <div>
      <Route path="/recipe-page" element={<RecipeCard />} />
      <Route path="/recipe/:id" element={<RecipeCard />} />
    </div>
  )
}

export default App
