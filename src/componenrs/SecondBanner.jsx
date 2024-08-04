
import SeecondBanner from './SecondBanner.png';

function SecondBanner() {
  return (
    <div className='mt-10  flex justify-center'>
      <img 
        src={SeecondBanner} 
        alt="Landing Banner" 
        className="w-full h-auto max-w-[1138px] object-cover"
      />
    </div>
  );
}

export default SecondBanner;
