import './styles.css';

import CarCardImg from 'assets/images/car-card.png';

function CarCard() {
    return (
        <div className="car-card">
            <div className="car-card-image">
                <img src={CarCardImg} alt="Carro" />
            </div>
            <div className="car-card-info">
                <h3>Audi Supra TT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <button type="button" className="btn btn-buy">Comprar</button>
            </div>
        </div>
    );
}

export default CarCard;