import LandngComplete from './LandngComplete.jpg';

function LandingBanner() {
  return (
    <div className='mt-10  flex justify-center'>
      <img 
        src={LandngComplete} 
        alt="Landing Banner" 
        className="w-full h-auto max-w-[1138px] object-cover"
      />
    </div>
  );
}

export default LandingBanner;
