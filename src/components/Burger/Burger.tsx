import {Food} from '../../types.ts';
import MakeBurgerIngredients from './MakeBurgerIngredients.tsx';
import React from 'react';

interface Props {
  ingredients: Food[];
}

const Burgers: React.FC<Props> = ({ingredients}) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      <MakeBurgerIngredients ingredients={ingredients}/>
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burgers;