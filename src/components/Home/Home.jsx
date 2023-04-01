import style from "./Home.module.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAuth0User,
  getAuth0User,
  setSavedCarrito,
} from "../../redux/actions/actions";
import CarrouselHome from "../CarrouselHome/CarrouselHome";
import El_Bodegon_de_Tony from "../images/El_Bodegon_de_Tony.png";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import Git from "../images/Git.png"
import Instagram from "../images/Instagram.png"

const Home = () => {
  const images = [
    {
      id: "1",
      title: "CocaCola",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/maxresdefault_osxdpw.jpg",
    },
    {
      id: "2",
      title: "Fanta",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/depositphotos_35961537-stock-photo-afternoon-tea_jwyt62.jpg",
    },
    {
      id: "3",
      title: "Tarta Pavlova",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/comida-rapida-fastfood-saludable_xuznic.jpg",
    },
    {
      id: "4",
      title: "Bife de chorizo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/comida-rapida-casera_xpbm55.jpg",
    },
    {
      id: "5",
      title: "Chinchulines",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Comida-francesa_q2m7gt.jpg",
    },
    {
      id: "6",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/ratatouille-1_b2pns3.jpg",
    },
    {
      id: "7",
      title: "Hot Dog con aderezo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679544650/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Hot_Dogs_igzyjk.png",
    },
    {
      id: "8",
      title: "MatHot Dog con lluvia de papasambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776907/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Comida-espa%C3%B1ola_rlscmm.jpg",
    },
    {
      id: "9",
      title: "Croquetas de Espinaca",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583508/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Croquetas-espinaca_ii9ksa.jpg",
    },
    {
      id: "10",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583630/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Tiramisu_qljmnm.jpg",
    },
  ];
  const { user } = useAuth0();

  const dispatch = useDispatch();

  return (
    <div className={style.home1}>
      <div className={style.home}>
        <h1>
          Tu restaurante favorito <br /> ahora esta en linea
        </h1>

        <p className={style.descripcion}>
          ¿Buscas la comodidad de disfrutar de la mejor comida sin salir de
          casa? ¡No busques más! Nuestro servicio de restaurante online ofrece
          una amplia variedad de opciones deliciosas, desde platos principales
          hasta postres tentadores, todo preparado con los ingredientes más
          frescos y de alta calidad.{" "}
        </p>
        {/* Además, puedes ordenar en línea fácilmente y programar la entrega a la hora que más te convenga. ¡Permítenos llevar la experiencia gastronómica a tu puerta y haz que cada comida sea una deliciosa experiencia en tu hogar!" */}
        <img className={style.logo} src={El_Bodegon_de_Tony} alt="logo" />
        <Link to={"/menu"}>
          <button className={style.categorias}>Ir a Categorias</button>
        </Link>
      </div>

      <div className={style.reseñas}>
        <div>
          <h4>Gran catalogo</h4>
          <p className={style.reseña1}>
            Encuentra gran variedades con mas de 12 categorias <br /> de comidas
            , postres y mas que tenemos para ti
          </p>
        </div>
        <div className={style.sub2}>
          <h4>Gran calidad</h4>
          <p className={style.reseña2}>
            Para nosotros, la calidad es primordial. Por ello, utilizamos
            únicamente ingredientes cuidadosamente seleccionados para ofrecerte
            la mejor experiencia culinaria{" "}
          </p>
        </div>

        <br />

        <div>
          <h4>Los platos mas deliciosos</h4>
          <p className={style.reseña3}>
            Si eres un amante de la buena comida, no puedes perderte la
            oportunidad <br /> de probar nuestros increíbles sabores, que te
            sorprenderán desde el <br /> primer bocado{" "}
          </p>
        </div>
        <div className={style.sub2}>
          <h4>
            Disfruta de nuestra deliciosa comida en casa con nuestro servicio de
            entrega a domicilio
          </h4>
          <p className={style.reseña4}>
            Sabemos que a veces es difícil encontrar tiempo para salir a comer,
            por eso ofrecemos entrega a domicilio para que puedas disfrutar de
            nuestra comida desde la comodidad de tu hogar
          </p>
        </div>
      </div>

      <div class="col-sm-6 mx-auto text-center ">
        <CarrouselHome images={images} className={style.CarrouselHome} />
      </div>

      <div className={style.platosLink}>
        <p className={style.platos}>
          ¿Quieres Conocer Nuestros Menú? Haz click aquí
        </p>

        <Link to={"/menu"}>
          <button className={style.categorias}>Ir a Categorias</button>
        </Link>

        <img
          src="https://parrilladasargentinas.com/wp-content/uploads/2018/05/Rezept-Tipp-vom-GRILLER-T-Bone-Steak-1024x576-ec63ff241cb89cff.jpg"
          className={style.carne}
          alt="Carne"
        />
      </div>

      <div>
        {/* Footer */}
        <footer class="text-center text-lg-start bg-white text-muted">
          {/* Section: Social media */}
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div class="me-5 d-none d-lg-block">
              <span>VISITA NUESTRAS REDES SOCIALES:</span>
            </div>
            {/* Left */}

            {/* Right */}
            <div className={style.socialmedia}>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-facebook-f">
                  <img src={facebook} alt="facebook" width="30px" />
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-google">
                  <img src={google} alt="" width="25px" />
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-instagram">
                <img src={Instagram} alt="facebook" width="27px" />
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-github">
                <img src={Git} alt="facebook" width="27px" />
                </i>
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}

          {/* Section: Links  */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div class="row mt-3">
                {/* Grid column */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3 text-secondary"></i>El Bodegón de
                    Tony
                  </h6>
                  <p className={style.descrip_footer}>
                    Nuestro restaurante ofrece una experiencia culinaria única y
                    memorable, disfrute de nuestra amplia selección de platos
                    exquisitos para todos los gustos.
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 class="text-uppercase fw-bold mb-4">Categorias</h6>
                  <p>Asados</p>
                  <p>Pizzas</p>
                  <p>Postres</p>
                  <p>Pizzas</p>
                  <p>¡Y MUCHO MAS!</p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    Enlaces Frecuentes
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">
                      Inicio
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Sobre Nosotros
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Menú
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Login
                    </a>
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 class="text-uppercase fw-bold mb-4">Contactanos</h6>
                  <p>
                    <i class="fas fa-home me-3 text-secondary"></i> New York, NY
                    10012, US
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3 text-secondary"></i>
                    elbodegon@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone me-3 text-secondary"></i> + 54 914
                    567 88
                  </p>
                  <p>
                    <i class="fas fa-print me-3 text-secondary"></i> + 57 310
                    567 89
                  </p>
                  <p>
                    <i class="fas fa-print me-3 text-secondary"></i> + 51 927
                    567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}

          {/* Copyright */}
          <div class="text-center p-4">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="#"></a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  );
};

export default Home;
