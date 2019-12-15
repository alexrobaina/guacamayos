import React, { Component } from 'react'
import icons1 from '../../images/icons/icon-01.svg'
import icons2 from '../../images/icons/icon-02.svg'
import icons3 from '../../images/icons/icon-04.svg'
import icons4 from '../../images/icons/icon-05.svg'
import icons5 from '../../images/icons/icon-06.svg'
import icons6 from '../../images/icons/instagram.svg'

import './services.scss'

const servicesData = [

    {
        image: icons1,
        alt: 'Guacamayos Visual',
        title: 'FOTOGRAFÍA',
        text: 'Hacemos fotoperiodismo, casual y espontáneo. Nos encanta capturar momentos sin que se sientan invadidos o se vean obligados a posar.'
    },
    {
        image: icons2,
        alt: 'Guacamayos Visual',
        title: 'VIDEO',
        text: 'Elaboramos un video con los mejores momentos o “highlights” de la boda para que puedan compartir en las redes sociales; o bien un video de mayor duración.'
    },
    {
        image: icons3,
        alt: 'Guacamayos Visual',
        title: 'Sesión PreCasamiento',
        text: 'Es una sesión de fotos previa al casamiento, donde generamos la oportunidad de entrar en confianza con los fotografos, estas fotos se pueden usar para crear invitaciones y regalos.'
    },
    {
        image: icons4,
        alt: 'Guacamayos Visual',
        title: 'REVELADO DIGITAL',
        text: 'Después de minucioso periodo de selección nos enfocamos en realizar ajustes de color con procesos y tratamientos de imagen profesionales. para sacar lo mejor de cada imagen.'
    },
    {
        image: icons5,
        alt: 'Guacamayos Visual',
        title: 'PÁGINA WEB | INVITACIONES',
        text: 'Hermosas invitaciones interactivas con base de datos para la confirmación de invitados, videos y fotografías. Incluye un website con resumen y links de descarga para compartir.'
    },
    {
        image: icons6,
        alt: 'Guacamayos Visual',
        title: 'TRAVEL',
        text: 'Nos encanta viajar, conocer nuevos lugares y otras culturas. Estamos preparados para documentar una boda al interior del país o al extranjero.'
    }
];

class Services extends Component {
    render() {
        return (
            <div id="servicios">
                <div className="container">
                    <div className="center-flex mTop80">
                        <p className="title">servicios</p>
                    </div>
                    <hr className="separadores" />
                    <div className="row">

                        {
                            servicesData.map((serv) => {
                                return (
                                    <div className="col-xs-12 col-md-4">
                                        <div className="card mTop50 card-servicios">
                                            <div className="center-flex icons-padding">
                                                <img className="card-img-top icons" src={serv.image} alt="fotografía de casamientos guacamayos" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title title-services">{serv.title}</h5>
                                                <p className="card-text">{serv.text}</p>
                                                <div className="center-flex btn-services">
                                                    <button href="#" className="btn btn-info">Info</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Services