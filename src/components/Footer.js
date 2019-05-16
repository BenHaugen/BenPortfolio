import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://medium.com/@ben1232jazz" target="_blank" className="icon fa-medium"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/BenHaugen" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/benhaugen88/" target="_blank" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
