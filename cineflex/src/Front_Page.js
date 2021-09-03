import MovieBox from "./MovieBox"

const movies = [
   {
      movieCover: 'fon'
   },
   {
      movieCover: 'fon'
   },
   {
      movieCover: 'fon'
   },
   {
      movieCover: 'fon'
   },
];

export default function Front_Page() {
   return (
      <div>
         <div className="interactionBox">
            <h1 className="interaction">Selecione o filme</h1>
         </div>
         <div className="moviesBox">
            {movies.map((data) => {
               return <MovieBox movieCover={data.movieCover} />
            })}

         </div>
      </div>
   );
}
