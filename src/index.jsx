import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// login
// login from google?

// list
// actions: edit, delete

// add debet (minus icon)
// date: Datetime (default: now)
// title: String
// category: SELECT * FROM `Categories`
// cost: Float

// add kredit (plus icon)
// date: Datetime (default: now)
// title: String
// cost: Float

// categories 
// actions edit, delete
// title: String

let database;
const initializeFirebase = () => {
    const config = {
        apiKey: "AIzaSyDaRFQmpfDE-sx4fy314dT-LLEnoe6z8Fs",
        authDomain: "pursewatcher.firebaseapp.com",
        databaseURL: "https://pursewatcher.firebaseio.com",
        projectId: "pursewatcher",
        storageBucket: "pursewatcher.appspot.com",
        messagingSenderId: "1034428734472"
    };
    firebase.initializeApp(config);
    database = firebase.database();
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null
        };
    }
    
    componentWillMount() {
        initializeFirebase();
        this.getData();
    }
    
    getData() {
        return firebase.database().ref('/item/').once('value').then(snapshot => {
            this.setState({items: snapshot.val()});
        });
    }

    render() {
        let { items } = this.state;

        items = Object.values(items);
        
        return <div>
            <h1>Purse Watcher</h1>
            {
                items.length && items.map(item => (
                    <div key={ Math.random() }>
                        <h2>{ item.title }</h2>
                        <div>date: { item.date }</div>
                        <div>cost: { item.cost }</div>
                    </div>
                ))
            }
        </div>;
    }
}

export default Index;