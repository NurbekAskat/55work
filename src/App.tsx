import './App.css';
import {useState} from 'react';
import IngredientsTable from './components/IngridientsTable/IngredientsTable.tsx';
import {Food} from './types.ts';


const App = () => {
  const [ingredients, setIngredients] = useState<Food[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0 },
  ]);

  const deleteButton = (name: string) => {
    setIngredients((ingredients) => {
      return ingredients.map((ingredient) => {
        if (ingredient.name === name && ingredient.count > 0) {
          return {...ingredient, count: ingredient.count - 1};
        }
        return {...ingredient};
      });
    });
  };

  const pushButton = (name: string): void => {
    setIngredients((ingredients) => {
      return ingredients.map((ingredient) => {
        if (ingredient.name === name) {
          return {...ingredient, count: ingredient.count + 1};
        }
        return {...ingredient};
      });
    });
  };


  return (
    <>
      <div>
        <IngredientsTable
          pushButton={pushButton}
          ingredients={ingredients}
          deleteButton={deleteButton}
        />
      </div>
    </>
  );
};


export default App;
