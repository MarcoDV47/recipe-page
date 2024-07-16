import RecipeCard from './components/RecipeCard/RecipeCard.jsx'
import GlobalStyle from '../assets/styles/GlobalStyles'


function App() {


  return (
    <div>
      <GlobalStyle />
      <Route path="/recipe-page" element={<RecipeCard />} />
      <Route path="/recipe/:id" element={<RecipeCard />} />
    </div>
  )
}

export default App
