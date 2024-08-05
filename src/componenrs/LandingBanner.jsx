
import LandngComplete from './LandngComplete.jpg';
import LandngCompleteM from './LandngCompleteM.jpg';

function LandingBanner() {
  return (
    <div className='mt-10  flex justify-center'>
      <img 
        src={LandngComplete} 
        alt="Landing Banner" 
        className=" hidden lg:block w-full h-auto max-w-[1138px] object-cover"
      />
      <img 
        src={LandngCompleteM} 
        alt="Landing Banner" 
        className="w-full lg:hidden  md:block h-auto max-w-[1138px] object-cover"
      />
    </div>
  );
}

export default LandingBanner;
