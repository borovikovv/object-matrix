import React from 'react';
import './item.css';

const Item = ({dataObj, onChangeAmount, cols }) => {

    const elements = dataObj.map((item) => {
        const {amount , id} = item;
        return (
            <span 
                key={id}
                onClick={()=> onChangeAmount(id, amount) }> {amount} </span>
        )
    });

    
    // задаем ширину матрицы
    const itemStyle = {
        width: `${cols * 30}px`
    };

    return (
        <div style={itemStyle} className='item'>
            { elements }
        </div>
    );
};

export default Item;