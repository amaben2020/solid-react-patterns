// the main catch is rather than do type === "admin" && or whatever, we are simply passing down a button that does stuff

import { ReactNode } from "react";

type TOpenClosePrinciple = {
  id: number;
  name: string;
  children: ReactNode;
};

const OpenClosed = ({ id, name, children }: TOpenClosePrinciple) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Id: {id}</p>

      {children}
    </div>
  );
};

export default OpenClosed;

// usage
// const AuthorRecipeCard = ({id, name, ingredients, onClick}) => {
//   return (
//       <RecipeCard id={id} name={name} ingredients={ingredients}>
//           <button onClick={onClick}>Go to site</button>
//       </RecipeCard>
//   )
// }

// const OwnRecipeCard = ({id, name, ingredients, onClick}) => {
//   return (
//       <RecipeCard id={id} name={name} ingredients={ingredients}>
//           <button onClick={onClick}>Go to cook steps</button>
//       </RecipeCard>
//   )
// }
