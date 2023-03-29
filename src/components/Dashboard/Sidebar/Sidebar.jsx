import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={`bg-light ${styles.sidebar}`}>
      <div className={`sticky-top ${styles.sticky}`}>
        <ul className={`nav flex-column ${styles.nav}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${styles.link}`}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/configuracion" className={`nav-link ${styles.link}`}>
              Configuración
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
