import { useState } from 'react';
import imgCard from '/spider.png';
import star from '/star.svg';
import close from '/close-button.svg';
import StarRating from './StartRating';


const Dialog = () => {
    const [rating, setRating] = useState(0);

    return (
        <div className="flex flex-col md:flex-row w-[375px] md:w-[1280px] h-[874px] md:h-[600px] bg-white">
            <div className="relative w-full h-[351px] md:w-full md:h-full md:basis-1/4">
                <img src={imgCard} alt="img-card" className='h-full w-full object-cover ' />
                <button className=' absolute top-2 pl-2'>
                    <img src={close} alt="close-button" />
                </button>
                <div className='absolute bottom-2 right-10 md:right-12 text-2xl font-bold text-black text-opacity-100'>
                    999
                </div>
                <img className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-6 h-6" src={star} alt="Star" />
            </div>
            <div className="flex-1 flex flex-col p-6">
                <h2 className="text-xl font-bold">Spider-Man: Across the Spider-Verse</h2>
                <h2 className="text-sm text-[#5C7284]">924482</h2>
                <h2 className="text-sm font-bold mt-5">¿De qué trata?</h2>
                <h2 className="text-base text-[#5C7284] font-normal">
                    Pirate ipsum arrgh bounty warp jack. Gar spot run blimey hearties. Scurvy halter down topsail yard men ensign yer <br />
                    deck red. Swab spanish schooner halter parrel spyglass coast pin. Deck overhaul tell pink across reef boat timbers.
                </h2>
                <div className="flex items-end justify-end mt-5">
                    <span className="inline-block border-[1px] border-[#4C42E4] rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-normal text-[#4C42E4] mr-2 mb-2">Categoria 1</span>
                    <span className="inline-block border-[1px] border-[#4C42E4] rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-normal text-[#4C42E4] mr-2 mb-2">Categoria 1</span>
                    <span className="inline-block border-[1px] border-[#4C42E4] rounded-full px-2 md:px-3 py-1 text-xs md:text-sm font-normal text-[#4C42E4] mr-2 mb-2">Categoria 1</span>
                </div>

                <h2 className="flex md:justify-center font-bold text-sm mt-6 md:mt-52">Cuéntanos ¿te gustó?</h2>
                <div className="flex justify-center mt-6 mb-5">
                    <StarRating rating={rating} setRating={setRating} />
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#E5004D] w-80 h-14 text-[#FFF] font-medium rounded-xl">Enviar calificación</button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;
