import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import star from '/star.svg';
import close from '/close-button.svg';

import { fetchGenres } from '../Router/Slices/allDataSlice';
import { RootState, AppDispatch } from '../Router/store';
import StarRating from './StartRating';

const Dialog = ({ onClose, movie }: { onClose: () => void; movie: any }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const genres = useSelector((state: RootState) => state.allData.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  function getGenreName(genreId: number) {
    const genre = genres.find((genre: any) => genre.id === genreId);
    return genre ? genre.name : 'Other';
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-[874px] md:h-[600px] bg-white overflow-y-auto md:overflow-hidden">
      <div className="relative w-full h-[351px] md:w-full md:h-full md:basis-1/4">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img-card" className="h-full w-full object-cover" />
        <button onClick={onClose} className="absolute top-4 pl-4">
          <img src={close} alt="close-button" />
        </button>
        <div className="absolute bottom-2 right-10 md:right-12 text-2xl font-bold text-black text-opacity-100">
          {movie.vote_average}
        </div>
        <img className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-6 h-6" src={star} alt="Star" />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <h2 className="text-sm text-[#5C7284]">{movie.popularity.toString()}</h2>
        <h2 className="text-sm font-bold mt-5">¿De qué trata?</h2>
        <h2 className="text-base text-[#5C7284] font-normal">{movie.overview}</h2>
        <div className="flex items-end justify-end mt-5">
          {movie.genre_ids.slice(0, 3).map((genreId: number) => (
            <span
              key={genreId}
              className="inline-block border-[1px] border-[#4C42E4] rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-normal text-[#4C42E4] mr-2 mb-2"
            >
              {getGenreName(genreId)}
            </span>
          ))}
        </div>

        <h2 className="flex md:justify-center font-bold text-sm mt-6 md:mt-48">Cuéntanos ¿te gustó?</h2>
        <div className="flex justify-center mt-6 mb-5">
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div className="flex justify-center">
          <button className="bg-[#E5004D] w-80 h-14 text-[#FFF] font-medium rounded-xl">Enviar calificación</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
