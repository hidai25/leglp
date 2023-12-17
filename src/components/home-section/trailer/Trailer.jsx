import { useRef, useEffect } from 'react';
import { bg3, rcar } from '../../../assets/images';
import './trailer.scss';

const Trailer = props => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className={`trailer ${props.isActive ? 'active' : ''}`} style={{ backgroundImage: `url(${bg3})` }}>
            <div className="overlay trailer__content">
                <div className="trailer__content__img">
                    <img src={rcar} alt="" />
                </div>
                <div className="trailer__content__info">
                    <div className="title">
                        <span>Compete to</span>
                        <h2 className="main-color">Win!!!</h2>
                    </div>
                    <div className="video">
                        <iframe
                            ref={iframeRef}
                            width="100%"
                            title="trailer"
                            src="https://www.youtube.com/embed/ogEtEip6VeA"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
