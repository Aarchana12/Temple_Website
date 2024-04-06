import { useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import Link from 'next/link';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideLeft = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const slideRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

  return (
    <>
      <div className="flex justify-end items-center mr-6 h-screen">
        <div className=" w-80 h-80 p-100 rounded-md relative">
          <div className="absolute left-0  top-0 w-full h-full flex items-right justify-center">
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='ml-15 mb-10 mt-5' width={300} height={350} /> 
          </div>
              
          <div className="absolute bottom-0 left-88 ml-4">
            <CiCircleChevLeft className="text-black  text-3xl cursor-pointer" onClick={slideLeft} />
          </div>

          <div className="absolute bottom-0 left-20 ml-2">
            <Link href="/gallery">
              <button className="text-black text-2xl cursor-pointer border border-black border-black-500 text-white" style={{backgroundColor:' #FFB429'}}>VIEW GALLERY</button>
            </Link>
          </div>

          <div className="absolute bottom-0 right-0 mr-4">
            <CiCircleChevRight className="text-black text-3xl cursor-pointer" onClick={slideRight} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 h-10 w-full bg-yellow-500'></div>
    </>
  );
};

export default Slider;
