import PropTypes from "prop-types";
import './ItemCertificaciones.css'

export function ItemCertficaciones({ img, nombre, urlCertificado, descripcion }) {
  return (
    <li className="item-certificaciones">
      <img src={img} alt="linux" className="logo-certificacion" />
      <div className="my-auto">
        <p className="text-light fs-3 fw-bold"> {nombre} </p>
        <p className="text-warning">{descripcion}</p>
        <a href={urlCertificado} className="btn-certificado" target="_blank">Mostrar Certificado</a> 
      </div>
    </li>
  );
}

ItemCertficaciones.propTypes = {
  urlCertificado: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};
