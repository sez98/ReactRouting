import React from 'react';

const BreedItem = (props) => {
         console.log(props);
  return (
    <>
      <div>
         Breed Items
         <hr />
         {props.match.params.name}
      </div>
    </>
  );
}

export default BreedItem;
