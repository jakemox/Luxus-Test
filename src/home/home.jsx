import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <header className="jumbotron jumbotron-fluid row align-items-center">
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                        <a className="navbar-brand dh-font" href="#">Luxus</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
                        <div className="col-lg-12 col-lg-offset-1 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                            <h1 className="display-1">It is time to unlock your creativity!<br></br>___</h1>
                            <p className="lead col-lg-9">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta error excepturi alias dignissimos optio. Enim sed amet rem nobis consequatur eius nulla at itaque!</p>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}