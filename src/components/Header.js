import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/benny.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Ben Haugen</strong></h1>◆ Software Engineer: Full Measure Education<br />
                    ◆ Flatiron School Graduate<br />

                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
