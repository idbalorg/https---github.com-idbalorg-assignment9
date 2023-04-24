import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Post = () =>{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getData = async () =>{
            try {
                const response = await axios.get(`https://swapi.dev/api/films`);
                setData(response.data.results);
                console.log(response.data)
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [])

    return(
        <div>
            
            {loading && <div>Data is loading. Please wait...</div>}
            {error && <div>{`There is a problem fetching your data - ${error}`}{console.log(error)}</div>}
            <div>
                {data && data.map((film) => {

                    return(
                        <div  className='movie-card card' key = {film.episode_id}>
                           <div className='h3p'>
                           <h3>{film.title} </h3>
                            <p>{film.release_date}</p>
                           </div>
                           
                            <p>{`${film.opening_crawl.substring(0,252)}... `}</p>
                            <hr />
                            <a href="https://www.google.com">More info</a>
                         
                        </div>      
                        
                    )
                    
                })  }
            </div>
        
        </div>
    )
}

export default Post;