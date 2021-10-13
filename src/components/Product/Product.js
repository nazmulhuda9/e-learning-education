import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, book, instructor, fees, discount } = props.product;

    return (

        <div className='product shadow'>
            <img className='image' src={img} alt="" />
            <div className='m-4'>
                <h3>Book: {book}</h3>
                <h5>Class: 12</h5>
                <h5>Instructor: <span className='text-primary'>{instructor}</span></h5>
                <h4>Course Fees: <span className='text-danger'>{fees}</span> </h4>
                <h5 className='text-primary'>{discount}</h5>
                <button type="button" className="btn btn-danger mt-2">Enroll Now</button>

            </div>
        </div>

    );
};

export default Product;