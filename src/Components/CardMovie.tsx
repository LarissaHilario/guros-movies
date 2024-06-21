import movie from '/spiderman.png';
import star from '/star.svg';

const CardMovie = () => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-[335px] h-[389px]">
                <div className="relative w-full h-[275px]">
                    <img className="w-full h-full object-cover opacity-95" src={movie} alt="Movie" />
                    <div className='absolute bottom-1 right-10 text-2xl font-bold text-white '>
                      8.6
                    </div>
                    <img className="absolute bottom-2 right-2 w-6 h-6" src={star} alt="Star" />
                </div>
                <div className="pl-6">
                    <div className="font-bold text-lg mb-2">Spider-Man Across the Spiderman</div>
                    <p className="text-gray-700 text-sm">924482</p>
                </div>
                <div className="pl-10 pt-4 w-202 h-24">
                    <span className="inline-block border-2 border-[#4C42E4] rounded-full px-3 py-1 text-sm font-semibold text-[#4C42E4] mr-2 mb-2">Animación</span>
                    <span className="inline-block border-2 border-[#4C42E4] rounded-full px-3 py-1 text-sm font-semibold text-[#4C42E4] mr-2 mb-2">Acción</span>
                    <span className="inline-block border-2 border-[#4C42E4] rounded-full px-3 py-1 text-sm font-semibold text-[#4C42E4] mr-2 mb-2">Aventura</span>
                </div>
            </div>
        </>
    );
}

export default CardMovie;
