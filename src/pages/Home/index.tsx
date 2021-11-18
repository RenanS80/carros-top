import './styles.css';

import CarImg from 'assets/images/car-header.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <main className="card-container">
                <div className="card-image">
                    <img src={CarImg} alt="Carro" />
                </div>
                <div className="card-info">
                    <div className="card-info-title">
                        <h3>O carro perfeito para você</h3>
                        <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                    </div>
                </div>
            </main>

            <section className="card-catalog-container">
                <div className="card-catalog-button">
                    <Link to="/catalog">
                        <button type="button" className="btn btn-catalog">Ver catálogo</button>
                    </Link>
                </div>
                <div className="card-catalog-text">
                    <p>Comece agora a navegar</p>
                </div>
            </section>
        </>
    );
}

export default Home;