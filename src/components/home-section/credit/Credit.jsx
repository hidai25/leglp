import './credit.scss'

import { useRef, useEffect } from 'react'

import {win,cta} from '../../../assets/images'
import Button from '../../button/Button'

const Credit = props => {
    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`} style={{ backgroundImage: `url(${win})` }}>
            <div className="credit__content">
                <div className="title">
                    <span>Start Your</span>
                    <h2 className="main-color">RACE</h2>
                </div>
                <div className="btns m-t-4">
                <a href="https://apps.apple.com/us/app/wristroad/id6468395372" target="_blank" rel="noopener noreferrer">
    {/* <Button className="btn"> */}
        <img src={cta} alt="Download on the App Store" />
    {/* </Button> */}
</a>
                </div>
            </div>
        </div>
    )
}

export default Credit
