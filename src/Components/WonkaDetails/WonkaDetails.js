import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./WonkaDetails.css";
import Navbar from "../Navbar/Navbar";

const WonkaDetails = (props) => {
    const [product, setProduct] = useState({
        name: '',
        price: null,
        img: '',
        details: '',
        reviews: [],
        
    });

    useEffect(() => {
        axios.get(`https://ironrest.herokuapp.com/wonkalicious-products/${props.match.params.id}`)
        .then((response) => {
            setProduct({...response.data});
        })
        .catch((err) => console.error(err));
    }, [props.match.params.id]);

    console.log(product)
    return <div>
    <Navbar />        
    </div>
};





export default WonkaDetails;