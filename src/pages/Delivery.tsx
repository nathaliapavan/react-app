import React from 'react';
import { Link } from 'react-router-dom';

function Delivery() {
    return(
        <div id="container">
            <aside>
                <header>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <button>Resetar Cadastro</button>
                </footer>
            </aside>

            <Link to="" className="create-orphanage">
            </Link>
        </div>
    );
}

export default Delivery;