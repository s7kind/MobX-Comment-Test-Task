import React from 'react';
import LoadingCat from '../../assets/icons/cart-empty.svg'
import './loader.scss'

const Loader = () => {
    return (
        <div className="loader" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={LoadingCat} alt=""/>
            <p style={{marginTop: "20px"}}>Я жду и ты подожди.. ;)</p>
        </div>
    );
};

export default Loader;