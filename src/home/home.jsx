import React from 'react';
import DropDown from '../dropdown/dropdown.jsx';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isTop: true
        }
    }
    
    
    
    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.setState({
                    isTop: false
                })
            } else {
                this.setState({
                    isTop: true
                })
            }
        });
    }

    render() {
        return (
            <>
                <header className="jumbotron jumbotron-fluid row align-items-center mx-0">
                    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${this.state.isTop === true ? 'nav-top' : 'nav-bottom'}`}>
                        <a className="navbar-brand dh-font" href="#">LUXUS</a>
                        <button className="search-icon navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse .ml-auto" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <a className="nav-item nav-link" href="#">Recipes</a>
                                <a className="nav-item nav-link" href="#">Seasonal</a>
                                <a className="nav-item nav-link" href="#">Blog</a>
                                <a className="nav-item nav-link" href="#">Contact</a>
                                <button className="nav-item nav-link" href="#"><img className="search" src={require('../img/search.svg')} alt="search"/></button>
                            </div>
                        </div>
                    </nav>

                    <div className="container">
                        <h1 className="display-1">It is time to unlock your creativity!</h1>
                        <div className="line"></div>
                        <p className="lead col-lg-9">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta error excepturi alias dignissimos optio. Enim sed amet rem nobis consequatur eius nulla at itaque!</p>
                    </div>
                </header>
                <DropDown />
                <footer>
                    <div className="container border-bottom mb-5 py-4">
                        <div className="d-flex align-items-center">
                            <span className="text-primary h3"><b>LUXUS</b></span>
                            <span className="text-muted mx-3"> | </span>
                            <span className="small">Results through design and technology</span>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}