import React from 'react';
import alexImage from '../../images/nosotros/alex_2.jpg'
import laliImage from '../../images/nosotros/lali_2.jpg'
import instagram from '../../images/icons/instagram.svg'

import './about.scss'

const nosotros = [
    {
        image: alexImage,
        name: 'Alex',
        title: 'Web developer and Photographer',
        instagram: instagram,
        instaUrl: 'https://www.instagram.com/alexrobaina/',
        text: 'Crecí en Caracas, Venezuela, rodeado de montañas que fui recorriendo. Estudié diseño gráfico y fotografía, pero la pasión por el aprendizaje me llevó a estudiar de forma autodidacta 3D, dibujo y diseño web. Soy un amante obsesionado de la vida y el diseño. La fotografía es para mí un momento de meditación, donde conecto con los sentidos. Actualmente en Buenos Aires dedico mis días a seguir conociéndome. La expresión, en sus distintas formas, es lo que persigo.'
    },
    {
        image: laliImage,
        name: 'Laura Miramon',
        title: 'Filmmaker and Photographer',
        instagram: instagram,
        instaUrl: 'https://www.instagram.com/lalimiramon/',
        text: 'Crecí en un pueblo de Córdoba. Empecé a apasionarme por la fotografía en un viaje a California. Pasé unos años estudiando fotografía y formando el ojo. Los viajes hicieron crecer mi sensibilidad y aportaron a construir mi mirada. Hoy pienso y leo la vida en luz, sombra y color. La curiosidad me llevó a hacer cine para contar a través del movimiento, y la necesidad de conectar con las palabras me llevó al mundo de la escritura. Hoy en Buenos Aires dedico mis días a lo que me apasiona, las personas, las emociones, las formas, las letras, los detalles y la belleza. Para mi VER es amar.'
    }
];

const About = () => {
    return (
        <div id="nosotros">
            <div className="center-flex mTop80">
                <p className="title">nosotros</p>
            </div>
            <hr className="separadores" />
            <div className="container">
                <div className="row">
                    {
                        nosotros.map((nos) => {
                            return (
                                <div className="col-xs-12 col-md-6">
                                    <div className="card mTop50 card-our">
                                        <div className="center-flex icons-padding">
                                            <img className="card-img-top img-nosotros" src={nos.image} alt="fotografía de casamientos guacamayos" />
                                        </div>
                                        <div className="card-body body-our">
                                            <h5 className="card-title title-our">{nos.title}</h5>
                                            <div className="center-flex">
                                                <a target="_blank" href={nos.instaUrl}><img className="card-img-top instagram" src={instagram} alt="fotografía de casamientos guacamayos" /></a>
                                            </div>
                                            <p className="card-text text-our">{nos.text}</p>
                                            <div className="center-flex btn-nosotros">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="ser-guacamayos">Ser guacamayos es volar sin límites. Desafiarse, moverse. Reírse del riesgo y los impedimentos. Ser exótico, distinto. Adaptarse. Ser parte de un equipo, una familia. Ser fiel a los sueños. Ganarle al miedo. Creer y confiar en que el amor puede revolucionarlo todo.</p>
                                <hr className="separadores-our" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;