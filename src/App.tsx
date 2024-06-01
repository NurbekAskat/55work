import './App.css';
import './components/IngredientsCost/IngredientsCost.css';
import {useState} from 'react';
import IngredientsTable from './components/IngridientsTable/IngredientsTable.tsx';
import {Food} from './types.ts';
import Burger from './components/Burger/Burger.tsx';

const App = () => {
  const [ingredients, setIngredients] = useState<Food[]>([
    {name: 'Meat', count: 0, price: 80},
    {name: 'Cheese', count: 0, price: 50},
    {name: 'Salad', count: 0, price: 10},
    {name: 'Bacon', count: 0, price: 60},
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

  const IngredientsCost = () => {
    const totalPrice = ingredients.reduce((total, ingredient) => {
      return total + ingredient.count * ingredient.price;
    }, 0);
    return (
      <div>
        <p>Price {totalPrice}</p>
      </div>
    );
  };

  return (
    <div className="mainContainer">
      <div>
        <IngredientsTable
          pushButton={pushButton}
          ingredients={ingredients}
          deleteButton={deleteButton}
        />
      </div>
      <div>
        <IngredientsCost/>
        <Burger ingredients={ingredients}/>
      </div>
    </div>
  );
};

export default App;
