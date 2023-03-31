import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addTotalPrice, reduceTotalPrice, removeProduct, removeManyProducts, createCarrito } from "../../redux/actions/actions";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";
import { useState } from "react";

/* felipe */
import Model from '../Detail/ModelDetail/modelDetail'

const Card = ({ image, name, id, price, rating, _quantity, stock, aux, setAux, item }) => {

  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (id) => {
    let tempData = [id];
    setTempData(data => [1, ...tempData])
    return setModel(true)

  }
  return (
    <>
      <div className={style.card}>
        <Link className="text-center text-info mt-3" to={`/detail/${id}`}>
          <h5 style={{ fontWeight: 'bold', margin: '10px' }} >{name}</h5>
        </Link>
        <Link to={`/detail/${id}`}>
          <img src={image} alt={name} className={style.card_image} />
        </Link>
        <p style={{ margin: '10px' }} >Price: {price} USD</p>
        <button type="button" class="btn btn-danger"
          onClick={() => getData(id)}
        >View details food
        </button>
        <p>Rating {rating}</p>
        <HandlerShoppingItems dish={item} aux={aux} setAux={setAux} id={id} />
      </div>
      {
        model === true ? <Model
          id={tempData[1]}
          hide={() => setModel(false)}
        /> : ''
      }
    </>
  );
};


export default Card;
