import React from 'react';
import './SingleIngredient.css';

interface Props {
  ingredient: { name: string, count: number };
}

const MakeIngredient: React.FC<Props> = ({ingredient}) => {
  return (
    <div className={ingredient.name}></div>
  );
};

export default MakeIngredient;