import React, { useState } from 'react';
import './CarBrand.css';  // Подключаем CSS для стилей и анимаций

const CarBrands = ({onTodos}) => {
    const [isShowCars, setIsShowCars] = useState(false);

    return (
        <div className="container">
            <h1 className="title">Car Showroom</h1>
            <button className="toggleButton" onClick={() => setIsShowCars(!isShowCars)}>
                {isShowCars ? 'Hide Cars' : 'Show Cars'}
            </button>
            <div className={`cardContainer ${isShowCars ? 'show' : 'hide'}`}>
                {onTodos.map(car => (
                    <div key={car.carId} className="card">
                        <img src={car.carImage} alt={car.carModel} className="carImage" />
                        <h2 className="carTitle">{car.carBrand} {car.carModel}</h2>
                        <p>Price: ${car.carPrice}</p>
                        <p>Capacity: {car.carCapacity} seats</p>
                        <p>Power: {car.carPower} HP</p>
                        <p>Year: {car.carManufacture}</p>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarBrands;
