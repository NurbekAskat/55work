import {Food} from '../../types.ts';
import React from 'react';

interface Props {
  ingredients: Food[];
}

const MakeBurgerIngredients: React.FC<Props> = ({ingredients}) => {
  return (
    <>
      {ingredients.map((ingredient) => {
        for (let i = 0; i < ingredient.count; i++) {
          return (
            <div className={ingredient.name}></div>
          );
        }
      })
      }
    </>
  );
};


export default MakeBurgerIngredients;