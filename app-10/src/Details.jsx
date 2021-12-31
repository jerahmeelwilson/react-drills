import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios';
export default function Details() {
    const {id} = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://practiceapi.devmountain.com/products/${id}`)
        .then((res) => {
          setDetails(res.data);
          
        })
      }, [id]);
    
    if (details) {
        return (
        <div>
            <h1>{details.title}</h1>
            <img src={details.image} alt={details.title}width='200'></img>
            <h3>Price: ${parseFloat(details.price).toFixed(2)}</h3>
        </div>
        )
    }
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
