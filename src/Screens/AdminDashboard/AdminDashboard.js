import React, { Component } from "react";
import Navbar from '../../Components/Navbar/Navbar'
import { Chart } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
import img4 from './img/04.jpg'
import img5 from './img/05.jpg'
import img6 from './img/06.png'


export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {};


    }

    UnionRoute = (name) => {
        localStorage.setItem("DistrictName", name);

        this.props.history.push('/unioncouncils');
        
    }

   
    render() {

        return (
            <div>
                <Navbar />

                <div className="container animated fadeIn delay-1s">

                    <h1 className="text-center m-3">Karachi Districts</h1>

                    <div class="m-2 card-deck">

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src={img1} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District Central</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md" onClick={this.UnionRoute.bind(this, 'Central')}>Union Councils</button>

                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src={img5} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District Malir</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md" onClick={this.UnionRoute.bind(this, 'Malir')}>Union Councils</button>

                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src={img3} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District South</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md" onClick={this.UnionRoute.bind(this, 'South')}>Union Councils</button>


                            </div>

                        </div>

                    </div>
                    <div class="m-2 card-deck">

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src={img4} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District West</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md" onClick={this.UnionRoute.bind(this, 'West')}>Union Councils</button>


                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src={img2} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District East</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md" onClick={this.UnionRoute.bind(this, 'East')}>Union Councils</button>


                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src={img6} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District Korangi</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md" onClick={this.UnionRoute.bind(this, 'Korangi')}>Union Councils</button>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

