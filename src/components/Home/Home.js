import React, { useEffect, useState } from 'react';
import HeaderImage from '../HeaderImage/HeaderImage';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <div>
                <HeaderImage></HeaderImage>
            </div>

            <div className='home container'>

                {
                    data.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Home;