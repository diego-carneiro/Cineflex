import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Front_Page() {

   const [filme, setFilmes] = useState([])

   useEffect(() => {

      const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies');
      promise.then(response => {
         console.log(response)
         setFilmes([...response.data])
      })
   }, []);

   return (
      <div>
         <div className="interactionBox">
            <h1 className="interaction">Selecione o filme</h1>
         </div>
         <div className="moviesBox">
            {filme.map((data) => 
               <Link to={`/sessoes/${data.id}`}>
                  <div className="movieIcon">
                     <img class="posterURL" src={data.posterURL} />
                  </div>
               </Link>
            )}
         </div>
      </div>
   );
}
