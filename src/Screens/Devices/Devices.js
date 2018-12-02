import React, { Component } from "react";
import Navbar from '../../Components/Navbar/Navbar'
import { Chart } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import firebase from "../../Config/firebase";


var FIREBASE_District_Info;



export default class Devices extends Component {
    constructor(props) {
        super(props);

        this.state = {};


    }


    componentDidMount = () => {
        // Bar chart
        const DistrictName =  localStorage.getItem("DistrictName")
        var dataRef = firebase.database().ref("Districts/"+DistrictName+"/");
        console.log("firebase console");
        dataRef.on('value', (snapshot) => {
            console.log("UnionCouncils fb get**", snapshot.val().Unions);
            FIREBASE_District_Info = snapshot.val();
        });

        var ctxB = document.getElementById("barChart").getContext('2d');
        new Chart(ctxB, {
            type: 'bar',
            data: {
                labels: ["Azizabad", "Karimabad", "Aisha Manzil", "Ancholi", "Rizvia Society", "Nazimabad"],
                datasets: [{
                    label: 'Overflow Distance',
                    data: [18, 19, 3, 5, 4, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {

        return (
            <div>
                <Navbar />

                <div className="container animated fadeIn delay-1s">

                    <Container>
                        <canvas id="barChart"></canvas>
                    </Container>

                    <h1 className="text-center m-3">Karachi Districts</h1>

                    <div class="m-2 card-deck">

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District Central</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md">Read more</button>

                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District Malir</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md">Read more</button>

                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District South</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md">Read more</button>

                            </div>

                        </div>

                    </div>
                    <div class="m-2 card-deck">

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District West</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md">Read more</button>

                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District East</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md">Read more</button>

                            </div>

                        </div>

                        <div class="card mb-4">

                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">

                                <h4 class="card-title">District Korangi</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type="button" class="btn btn-light-blue btn-md">Read more</button>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-end container fixed m-10 absolute ">

                <a class="btn-floating btn-lg purple-gradient"><i class="fa fa-plus"></i></a>
                </div>
            </div>
        );
    }
}

