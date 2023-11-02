import { useState } from "react"
import './styles.css'

const SelectCar = ({ setRacingCar }) => {
    const [car, setCar] = useState('')

    return (
        <div className="select-wrapper">
            <h1 className="select-wrapper__title">Racing Game</h1>

            <div className="select-wrapper__cars">
                <CarComponent isSelected={car === 'red-car'} power={5000} onClick={() => setCar('red-car')} url='/red-car.png' />
                <CarComponent isSelected={car === 'blue-car'} power={3000} onClick={() => setCar('blue-car')} url='/blue-car.png' />
                <CarComponent isSelected={car === 'fire-truck'} power={2000} onClick={() => setCar('fire-truck')} url='/fire-truck.png' />

            </div>

            <div className="select-wrapper__btn-wrapper">
                <button onClick={() => setRacingCar(car)} type="button" className={`btn-wrapper__btn ${car ? '' : 'btn-disabled'}`}>Select</button>
            </div>
        </div>
    )
}

const CarComponent = ({ isSelected, url, onClick, power }) => {
    return (
        <div onClick={onClick} className={`cars-item ${isSelected ? ' car__selected' : ''}`}>
            <img className="cars-item__img" src={url} alt="Racing Game with Three js (Developed by Hamidreza Ghanbari)" />
            <span>Power: {power}cc</span>
        </div>
    )
}

export default SelectCar