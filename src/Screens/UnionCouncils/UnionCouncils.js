import React, { Component } from "react";
import Navbar from '../../Components/Navbar/Navbar'
import { Chart } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import firebase from "../../Config/firebase";


var FIREBASE_District_Info;
var unionlist = []; 
var manholegraph;



export default class UnionCouncils extends Component {
    constructor(props) {
        super(props);

        this.state = {};


    }


    componentDidMount = () => {

        const DistrictName = localStorage.getItem("DistrictName")
        
        // Bar chart
        var graphRef = firebase.database().ref("Districts/" + DistrictName + "/Unions/Uc-01/Devices/Device01/Manholes/ManHole01/Distance");
        graphRef.on('value', (snapshot) => {
            console.log("graph data", snapshot.val());
            manholegraph = snapshot.val();
            console.log("manhole**",manholegraph)
        });
                
        var dataRef = firebase.database().ref("Districts/" + DistrictName + "/");
        
        console.log("firebase console");
        dataRef.on('value', (snapshot) => {
            console.log("UnionCouncils fb get**", snapshot.val().Unions);
            FIREBASE_District_Info = snapshot.val();
            unionlist.push(snapshot.val());
            console.log(unionlist);
        });

        var ctxB = document.getElementById("barChart").getContext('2d');
        graphRef.on('value', (snapshot) => {
            console.log("graph data", snapshot.val());
        new Chart(ctxB, {
            type: 'bar',
            data: {
                labels: ["Manhole 01", "Manhole 02", "Manhole 03", "Manhole 04", "Manhole 05"],
                datasets: [{
                    label: 'Overflow Distance',
                    data: [snapshot.val(), 120, 90, 85, 34],
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
        manholegraph = snapshot.val();
        console.log("manhole**",manholegraph)
    });

    }

    render() {

        return (
            <div>
                <Navbar />
                <div className="container animated fadeIn delay-1s">

                    <div class="container">

                        <div class="row">

                            <div class="col-lg-3">
                                <h1 class="my-4">Union Councils</h1>
                                <div class="list-group">
                                    <a href="#" class="list-group-item">Uc-01</a>
                                </div>
                                
                            </div>

                            <div class="col-lg-9">

                                <div class="card mt-4">

                                    <Container>
                                        <canvas id="barChart"></canvas>
                                    </Container>
                                </div>

                                <div class="card card-outline-secondary my-4">
                                    <div class="card-header">
                                        Devices List
      </div>
                                    <div class="card-body">
                                        <p>devices 01</p>
                                        <button type="button" class="btn btn-light-blue btn-md">View Graph</button>
                                        <hr />                                      
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        );
    }
}

