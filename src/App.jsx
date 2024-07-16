import RecipeCard from './components/RecipeCard/RecipeCard.jsx'

function App() {


  return (
    <div>
      <Route path="/" element={<RecipeCard />} />
      <Route path="/recipe/:id" element={<RecipeCard />} />
    </div>
  )
}

export default App
