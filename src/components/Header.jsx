import React from 'react';
import logo from "./logo.png";

const Header = (props) => {
    return (
        <main className="container">
					<section className="row my-3 flex-column align-items-center">
						<img src={logo} alt="Studio Ghibli Logo" />
                        <h1>Ghibli Films</h1>
						<div className="d-flex">
							<button type="button" onClick={props.handleFilms} className="btn btn-primary shadow m-5">Load Films</button>
							<button type="button" onClick={props.handlePeople} className="btn btn-primary shadow m-5">Load People</button>
						</div>
					</section>
				</main>
    )
}

export default Header

