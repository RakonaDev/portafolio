import PropTypes from "prop-types";
import "./ItemCertificaciones.css";
import { motion } from "motion/react";

export function ItemCertficaciones({
  img,
  nombre,
  urlCertificado,
  descripcion,
}) {
  return (
    <li className="item-certificaciones">
      <img src={img} alt="linux" className="logo-certificacion" />
      <div className="my-auto body-certificaciones">
        <motion.p
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-light fs-3 fw-bold"
        >
          {nombre}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-warning"
        >
          {descripcion}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <a href={urlCertificado} className="btn-certificado" target="_blank">
            Mostrar Certificado
          </a>
        </motion.div>
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
