import CardMovie from '../Components/CardMovies/CardMovie';
import Dialog from '../Components/DialogMovie';
import image from '/logo.svg';

const Home = () => {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <div className="grid h-10 md:h-20 mt-10 ml-6 flex-grow place-items-start">
          <div className="navbar">
            <img className="image  w-20 md:w-40" src={image}  />
          </div>
        </div>
      </div>

      <div className="flex w-full mt-0 md:mt-5"> 
        <div className="grid bg-neutral w-full h-full">
          <div className="flex text-lg md:text-2xl font-bold pl-6 pr-12"> 
            Top movies en Guros
          </div>
          <div className='flex text-sm md:text-base font-normal pl-6 leading-6 pt-4 pr-12 text-[#5C7284]'>
          Pirate ipsum arrgh bounty warp jack. Red keelhaul spirits on avast. Topsail chase pirate lanyard mizzen log me. Hogshead hearties brace black boom. Coast rig dead round or.
          </div>
        </div>
        
      </div>
      <div className='pl-6 pt-4'>

      
      <Dialog/>
      
      </div>
    </>
  );
}

export default Home;
