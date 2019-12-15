import React from 'react';
import img1 from '../../images/carousel/carousel-00001.jpg'
import img2 from '../../images/carousel/carousel-00002.jpg'
import img3 from '../../images/carousel/carousel-00005.jpg'
import img4 from '../../images/carousel/carousel-00008.jpg'
import img5 from '../../images/carousel/carousel-00012.jpg'

const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img5} className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;