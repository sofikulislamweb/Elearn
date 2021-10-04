import React from 'react';

const HomeItems = (props) => {
    const { img, name, Title, price } = props.item;
    return (
        <div className="card mb-3 col-md-6 " style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{Title}</p>
                        <p className="card-text">Price: {price}$</p>
                        <button className='btn btn-warning'>Enroll now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItems;