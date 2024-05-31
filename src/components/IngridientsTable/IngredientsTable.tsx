import React from 'react';
import SingleIngredient from '../SingleIngridient/SingleIngredient.tsx';
import {Food} from '../../types.ts';

interface Props {
  pushButton: (name: string) => void;
  ingredients: Food[];
  deleteButton: (name: string) => void;
}

const IngredientsTable: React.FC<Props> = ({
                                             ingredients,
                                             deleteButton,
                                             pushButton
                                           }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <SingleIngredient
          pushButton={() => pushButton(ingredient.name)}
          ingredient={ingredient}
          deleteButton={() => deleteButton(ingredient.name)}
        />
      ))}
    </div>

  );
};

export default IngredientsTable;