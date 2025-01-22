import React, { useState } from "react";
import CarBrands from "./CarBrands";

const carBrands = [
  {
    carId: 1,
    carBrand: "Toyota",
    carModel: "Camry",
    carPrice: 25000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 5,
    carPower: 203,
    carManufacture: 2023,
  },
  {
    carId: 2,
    carBrand: "BMW",
    carModel: "3 Series",
    carPrice: 45000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 5,
    carPower: 255,
    carManufacture: 2023,
  },
  {
    carId: 3,
    carBrand: "Mercedes",
    carModel: "C-Class",
    carPrice: 42000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 5,
    carPower: 255,
    carManufacture: 2023,
  },
  {
    carId: 4,
    carBrand: "Audi",
    carModel: "A4",
    carPrice: 40000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carPower: 201,
    carManufacture: 2023,
  },
  {
    carId: 6,
    carBrand: "Ford",
    carModel: "Mustang",
    carPrice: 55000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 4,
    carPower: 450,
    carManufacture: 2023,
  },
  {
    carId: 7,
    carBrand: "Chevrolet",
    carModel: "Malibu",
    carPrice: 27000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 5,
    carPower: 160,
    carManufacture: 2023,
  },
  {
    carId: 8,
    carBrand: "Nissan",
    carModel: "Altima",
    carPrice: 26000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 5,
    carPower: 188,
    carManufacture: 2023,
  },
  {
    carId: 9,
    carBrand: "Volkswagen",
    carModel: "Passat",
    carPrice: 28000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 5,
    carPower: 174,
    carManufacture: 2023,
  },
  {
    carId: 10,
    carBrand: "Hyundai",
    carModel: "Sonata",
    carPrice: 24000,
    carImage:
      "https://e7.pngegg.com/pngimages/768/421/png-clipart-car-computer-icons-sedan-auto-detailing-auto-driving-rectangle-thumbnail.png",
    carCapacity: 5,
    carPower: 191,
    carManufacture: 2023,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(carBrands); // маалыматтар сакталуучу массив
  const [inputValue, setInputValue] = useState(""); // инпуттун маанисин сактоочу переменный

  console.log(inputValue);
  console.log(todos);

  // инпуттун маанисин алып беруучу () => {}
  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  // кнопка басылганда иштоочу () => {}
  const clickButtonHandler = () => {
    setTodos([...todos, { id: Math.random(), text: inputValue }]);
    setInputValue("");
  };

  const deleteHandler = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((el) => el.id !== id);
    setTodos(filteredTodos);
    console.log(filteredTodos);
  };

  const resetHandler = () => {
    setTodos([]);
  };

  return (
    <div>
      <input onChange={changeInputHandler} type="text" />
      <br />
      <input onChange={changeInputHandler} type="text" />
      <br />
      <input onChange={changeInputHandler} type="text" />
      <br />
      <input onChange={changeInputHandler} type="text" />
      <br />
      <input onChange={changeInputHandler} type="text" />
      <br />
      <input onChange={changeInputHandler} type="text" />
      <br />
      <input onChange={changeInputHandler} type="text" />
      <br />
      <button onClick={clickButtonHandler}>Add todo</button>
      <br />
      <button onClick={resetHandler}>Сброс данных</button>
      <CarBrands onTodos={todos} />
    </div>
  );
};

export default TodoList;
