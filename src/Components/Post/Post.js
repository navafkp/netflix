import React, { useEffect, useState } from 'react'
import './Post.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constant/Constant'
import Youtube from 'react-youtube'

function Post(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrl] = useState('')
    useEffect(() => {
        axios.get(props.url)
            .then((resposne) => {
                setMovies(resposne.data.results)
               
            }).catch((error) => {
                // alert("server error")
            })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovie = (id)=>{
        console.log(id)
        console.log(`/movie/${id}/videos?api_key=${API_KEY}`)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
        .then((response)=>{
            if(response.data.results.length!==0){
                setUrl(response.data.results[0])
               
            } else{
                console.log('no data')
            }
        }).catch((error)=>{
            console.log(error)
        })
        

    }

    return (

        <div className='row'>
            <h1>{props.title}</h1>
            <div className='posters'>
                {movies.length > 0 && movies.map((obj) =>     
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallposter': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="movie posters" />
                )}

            </div>
          {urlId && <Youtube videoId={urlId.key} opts={opts} />} 
            
        </div>
    )
}

export default Post