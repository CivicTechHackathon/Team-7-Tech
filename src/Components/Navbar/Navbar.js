import React, { Component } from 'react';
// import firebase from 'firebase';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName : localStorage.getItem("userName")
        };
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        // firebase.auth().signOut().then(function () {
        //     // Sign-out successful.
        //     window.localStorage.clear();
        //     console.log('User Sign Out');

        // }).catch(function (error) {
        //     // An error happened.
        // });
    }

    render() {
        return (
            <div>
                <nav class="mb-1 navbar navbar-expand-lg navbar-dark  default-color">
          <a class="navbar-brand" href="#">Sewage Surfers</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
            
            <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
            <a class="nav-link waves-effect waves-light">SignOut</a>                
                </li>
            </ul>

          </div>
        </nav>
            </div>
        )
    }

}