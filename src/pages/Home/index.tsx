import './styles.css';

import CarImg from 'assets/images/car-header.png';
import Navbar from 'components/Navbar';

function Home() {
    return (
        <>
            <Navbar />

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
                    <a href="/catalog">
                        <button type="button" className="btn btn-catalog">Ver catálogo</button>
                    </a>
                </div>
                <div className="card-catalog-text">
                    <p>Comece agora a navegar</p>
                </div>
            </section>
        </>
    );
}

export default Home;