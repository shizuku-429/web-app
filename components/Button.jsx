//components/Buttpm.jsx

/* ソート時のボタンコンポーネント */

import React from 'react';

const Button = ({handleSort}) => (
    <div className='sort'>
        <button onClick={ () => handleSort("dep")}>所属</button>
         <button onClick={ () => handleSort("where")}>場所</button>
    </div>
  
);

export default Button;