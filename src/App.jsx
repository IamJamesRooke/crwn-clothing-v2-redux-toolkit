import Directory from "./components/directory/directory.component.jsx"
import categories from "./data/categories.data.js";

const App = () => {
  return (
    <Directory categories={categories}/>
  )
};

export default App;
