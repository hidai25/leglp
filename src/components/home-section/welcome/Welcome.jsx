import { useEffect } from 'react'
import './welcome.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import hoverEffect from 'hover-effect'

import {
    wrn,
    tech,
    rcar,
    cor,
    cta
} from '../../../assets/images'

const champImgs = [rcar,tech,cor]

const Welcome = props => {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: tech,
                hover: false
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if (!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={wrn}
        >
            <div className="welcome__info relative">
<div className="welcome__info__content">
    <div className="title">
    <span>Welcome to</span>
    <h2 className="main-color">WristRoad</h2>
</div>
<div className="description m-t-4">
    <h3>Thrilling Adventure Awaits:</h3>
    <ul>
        <li>Explore stunning landscapes, from urban jungles to wild mountains.</li>
        <li>Smooth Controls: Seamlessly navigate using your watch's cutting-edge technology.</li>
    </ul>
    <blockquote>"Join the thrill! Our community is raving about the exhilarating tracks!"</blockquote>
</div>
    <div className="btn-group">
    {/* <a href="https://apps.apple.com/us/app/wristroad/id6468395372" target="_blank" rel="noopener noreferrer">
        <Button className="btn-main">DOWNLOAD NOW</Button>
    </a> */}
    <a href="https://apps.apple.com/us/app/wristroad/id6468395372" target="_blank" rel="noopener noreferrer" className="btn-group">
        <img src={cta} alt="Download on the App Store" />
    </a>
</div>

</div>

            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => (
                            <img 
                            src={item} 
                            key={index} 
                            style={{ width: '50px', height: '50px', objectFit: 'contain' }} // Added inline styles
                        />
                        ))
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome
