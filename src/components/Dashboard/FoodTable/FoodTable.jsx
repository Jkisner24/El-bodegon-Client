import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodContainer from "../FoodContainer/FoodContainer";


const FoodTable = () => {
    const foods = useSelector(state => state.allDishes)

    return (
        <div>
            <Link to="/dashboard">
                <button>Volver</button>
            </Link>
            <h1><Link to ="create"><button>Agregar plato</button></Link></h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <FoodContainer foods={foods}/>
            </table>
        </div>
    );
}
 
export default FoodTable;