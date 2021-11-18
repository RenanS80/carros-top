import './styles.css';

import ButtonSearch from 'components/ButtonSearch';
import CarCard from 'components/CarCard';

function Catalog() {
    return (
        <>
            <ButtonSearch />

            <section className="container-fluid my-4 custom">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <CarCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <CarCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <CarCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <CarCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <CarCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <CarCard />
                    </div>
                </div>
            </section>
        </>

    );
}

export default Catalog;