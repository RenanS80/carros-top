import './styles.css';

function ButtonSearch() {
    return (
        <div className="btn-container">
            <form>
                <div className="input-group group-search">
                    <input type="text" id="input-search" className="form-control" placeholder="Digite sua busca" />
                    <button className="btn btn-search" type="submit">
                        <p>Buscar</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ButtonSearch;