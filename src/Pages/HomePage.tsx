import React, { useState } from 'react';
import CardMovie from '../Components/CardMovies/CardMovie';
import Dialog from '../Components/DialogMovie';
import image from '/logo.svg';

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className={`flex w-full overflow-hidden ${isDialogOpen ? 'blur-sm' : ''}`}>
        <div className="grid h-10 md:h-12 mt-10 ml-6 flex-grow place-items-start">
          <div className="navbar">
            <img className="image w-20 md:w-38" src={image} alt="Logo" />
          </div>
        </div>
      </div>

      <div className={`flex w-full ${isDialogOpen ? 'blur-sm' : ''}`}>
        <div className="grid bg-neutral w-full h-full">
          <div className="flex text-lg md:text-2xl font-bold pl-6 pr-12">
            Top movies en Guros
          </div>
          <div className='flex text-sm md:text-base font-normal pl-6 leading-6 pt-4 pr-12 text-[#5C7284]'>
            Pirate ipsum arrgh bounty warp jack. Red keelhaul spirits on avast. Topsail chase pirate lanyard mizzen log me. Hogshead hearties brace black boom. Coast rig dead round or.
          </div>
        </div>
      </div>

      <div className={`flex pl-6 pt-4 w-full ${isDialogOpen ? 'blur-sm' : ''}`}>
        <CardMovie
          ranking="8.6"
          movie="/path/to/movie-image.jpg"
          title="Spider-Man: Across the Spider-Verse"
          number="924482"
          about="Pirate ipsum arrgh bounty warp jack. Gar spot run blimey hearties..."
          categorie1="Animación"
          categorie2="Acción"
          categorie3="Aventura"
          onClick={openDialog}
        />
      </div>

      {isDialogOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-85 z-40" onClick={closeDialog}></div>
          <div className="fixed inset-0 flex top-1/3 md:top-[44%] z-50 overflow-auto md:overflow-hidden">
            <Dialog onClose={closeDialog} />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
