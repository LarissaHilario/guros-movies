import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardMovie from './CardMovie';
import { chargingAllData } from '../../Router/Thunks/allDataThunk';
import { fetchGenres } from '../../Router/Slices/allDataSlice';
import { RootState, AppDispatch } from '../../Router/store';

const CardMovieList = ({ openDialog }: { openDialog: (movie: any) => void }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [randomMoviesByPage, setRandomMoviesByPage] = useState<{ [key: number]: any[] }>({});
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.allData.allData || []);
  const genres = useSelector((state: RootState) => state.allData.genres || []);
  const totalPages = useSelector((state: RootState) => state.allData.totalPages);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(chargingAllData(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (movies.length > 0 && !randomMoviesByPage[currentPage]) {
      generateRandomMovies(currentPage);
    }
  }, [movies, randomMoviesByPage, currentPage]);

  const generateRandomMovies = (page: number) => {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    const random = shuffled.slice(0, 5);
    setRandomMoviesByPage(prevState => ({
      ...prevState,
      [page]: random
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (!randomMoviesByPage[page]) {
      dispatch(chargingAllData(page)); 
    }
  };

  const handleCardClick = (movie: any) => {
    openDialog(movie); 
  };

  function getGenreName(genreId: number) {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Other';
  }

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const currentRandomMovies = randomMoviesByPage[currentPage] || [];

  return (
    <div className="">
      {currentRandomMovies.map((movie) => (
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
