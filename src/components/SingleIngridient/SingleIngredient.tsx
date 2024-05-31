import React from 'react';
import './SingleIngredient.css';

interface Props {
  pushButton: React.MouseEventHandler;
  ingredient: { name: string, count: number };
  deleteButton: React.MouseEventHandler;
}

const SingleIngredient: React.FC<Props> = ({
                                             ingredient,
                                             deleteButton,
                                             pushButton,
                                           }) => {
  return (
    <div>
      <button onClick={pushButton} className={`ingredientBtn ${ingredient.name}`}></button>
      <span>{ingredient.name}</span>
      <span>{ingredient.count}</span>
      <button onClick={deleteButton}>Удалить</button>
    </div>
  );
};

export default SingleIngredient;