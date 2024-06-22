import { useState, useEffect } from 'react';
import CardMovie from './CardMovie';

const CardMovieList = ({ openDialog }: { openDialog: (movie: any) => void }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genres, setGenres] = useState<any[]>([]);

  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, [currentPage]);

 

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`);
      if (response.ok) {
        const data = await response.json();
        const totalPages = data.total_pages;
        setTotalPages(totalPages);
        const randomMovies = getRandomMovies(data.results, 5);
        setMovies(randomMovies);
      } else {
        throw new Error('Error al obtener las películas');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
      if (response.ok) {
        const data = await response.json();
        setGenres(data.genres);
      } else {
        throw new Error('Error al obtener los géneros');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getRandomMovies = (movies: any[], count: number) => {
    const shuffled = movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCardClick = (movie: any) => {
    openDialog(movie); 
  };

  function getGenreName(genreId: number) {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Other';
  }

  return (
    <div className="">
      {movies.map((movie) => (
        <div key={movie.id} className="">
          <CardMovie
            ranking={movie.vote_average}
            movie={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            number={movie.popularity.toString()}
            about={movie.overview}
            categorie1={getGenreName(movie.genre_ids[0])}
            categorie2={getGenreName(movie.genre_ids[1])}
            categorie3={getGenreName(movie.genre_ids[2])}
            onClick={() => handleCardClick(movie)}
          />
        </div>
      ))}

      <div className="flex justify-end pr-6 w-full gap-2 pb-4">
        <button
          className={`border-[1px] border-[#4C42E4] hover:bg-gray-300 text-base text-[#4C42E4] font-semibold px-4 py-2 mr-1 rounded-md w-40  ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className=" border-[1px] border-[#4C42E4] hover:bg-gray-300 text-base text-[#4C42E4] font-semibold px-4 py-1 ml-1 rounded-lg w-40 "
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default CardMovieList;
