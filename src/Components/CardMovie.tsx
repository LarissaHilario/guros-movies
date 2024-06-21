import movie from '/spiderman.png';
import star from '/star.svg';

const CardMovie = () => {
    return (
        <>
            <div className="max-w-sm md:max-w-full rounded overflow-hidden shadow-lg w-[335px] md:w-[985px] h-auto md:h-[275px] md:flex md:flex-row-reverse md:justify-between">
                <div className="relative w-[335px] h-[275px] md:w-[275px] md:flex-shrink-0">
                    <img className="w-full h-full object-cover opacity-95" src={movie} alt="Movie" />
                    <div className='absolute bottom-1 md:bottom-3 right-10 md:right-[330px] text-2xl font-bold text-white md:text-[#5C7284]'>
                        8.6
                    </div>
                    <img className="absolute bottom-2 md:bottom-4 right-2 md:right-[300px] w-6 h-6" src={star} alt="Star" />
                </div>
                <div className="md:flex-1 md:pl-1">
                    <div className="px-6 py-4">
                        <div className="font-bold text-lg md:text-xl mb-2">Spider-Man Across the Spiderman</div>
                        <p className="text-gray-700 text-sm">924482</p>
                        <div className='hidden md:block'>
                            <div className='font-bold text-lg md:text-lg mb-2'>¿De qué trata?</div>
                            <p className='text-gray-700 md:text-base'>Pirate ipsum arrgh bounty warp jack. Gar spot run blimey hearties. Scurvy halter down topsail yard men ensign yer deck red. Swab spanish schooner halter parrel spyglass coast pin. Deck overhaul tell pink across reef boat timbers.</p>
                        </div>
                    </div>
                    <div className="pl-10 md:pl-6 pt-4 md:pt-8 w-202 h-24">
                        <span className="inline-block border-2 border-[#4C42E4] rounded-full px-3 py-1 text-sm font-semibold text-[#4C42E4] mr-2 mb-2">Animación</span>
                        <span className="inline-block border-2 border-[#4C42E4] rounded-full px-3 py-1 text-sm font-semibold text-[#4C42E4] mr-2 mb-2">Acción</span>
                        <span className="inline-block border-2 border-[#4C42E4] rounded-full px-3 py-1 text-sm font-semibold text-[#4C42E4] mr-2 mb-2">Aventura</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardMovie;
