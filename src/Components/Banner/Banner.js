import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constant/Constant'

function Banner() {
    const [movie, setMovie] = useState()
    let count = 2;

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
               
                    setMovie(res.data.results[count])


            })


    })






    return (

        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : " "})` }} className='head'>

            <div className='content'>
                <h1 className='title'>{movie ? movie.title : " "}</h1>
                <div className='banner_btn'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : " "}</h1>
            </div>

            <div className="fade"></div>

        </div>
    )
}

export default Banner;