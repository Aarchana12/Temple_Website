import Image from 'next/image';
import Link from 'next/link';
import Slider from '@/components/Slider';
import { RxDropdownMenu } from "react-icons/rx";
import Notifications from './Notifications/Notifications.js';
import { FaVolumeUp, FaBell} from 'react-icons/fa'; // Import volume icon from react-icons/fa
import { useState } from 'react';

const Main = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    const audio = new Audio('/audio/om_namah_sivaya.mp3');
    audio.play();
    setIsPlaying(true);
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  };

  return (
    <>
      <div className="relative mt-0">
        <div className='absolute top-0 w-full h-16 bg-yellow-500 font-bold flex items-center'>
          <div>
            <Image src="/temple_logo.png" alt="Temple Logo" width={45} height={20} className="mr-2" />
          </div>
          <h2 className='mt-4 ml-2'>SHRI DHARMA SASTHA KOVIL</h2>
          {/* Add OM NAMAH SIVAYA text and volume icon */}
          <div className="ml-auto flex items-center mr-40"> {/* Adjusted margin and alignment */}
            <p className="text-lg font-bold mr-1">OM NAMAH SHIVAYA</p> {/* OM symbol */}
            <FaVolumeUp className={`cursor-pointer ${isPlaying ? 'text-yellow-500' : 'text-black-500'}`} onClick={playAudio} />
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute top-0 right-0 mr-3 mt-4 border border-solid border-black-500 text-white" style={{backgroundColor:' #BB5A00'}}> CONTACT US</button>
        </div>
        
        {/* Navigation Bar */}
        <div className="absolute top-10 mt-4 w-full h-16 bg-red-900 text-white font-bold">
          <div className='text-white font-bold mt-5 flex justify-center mr-40'>
            <RxDropdownMenu className="absolute text-5xl text-white left-0 top-3" />
            <Link href='/home' className='left-0 text-white-500 '>Home</Link>
            <Link href='/about' className='ml-20'>About</Link>
            <Link href='/events' className='ml-20'>Events</Link>
            <Link href='/dharshan' className='ml-20'>Dharshan</Link>
            <Link href='/gallery' className='ml-20 '>Gallery</Link>
            <Link href="/notifications">
  <FaBell className="absolute top-5 right-20 text-white text-xl cursor-pointer" />
</Link>

          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-1 h-full"></div> {/* Vertical line */}
      </div>
      
      {/* Content - MANTRAS OM-SYMBOL TEMPLE TIMINGS */}
      <div className="absolute top-40 left-80 ml-40 w-full text-center mt-0 font-bold ">
        <Link href="/temple-timings" className="text-1xl font-bold hover:underline">Temple Timings</Link><span className="mr-10"></span><Link href="/om-symbol" className="text-1xl font-bold hover:underline">&#x0950;</Link><span className="mr-10"></span>  <Link href="/mantras" className="text-1xl font-bold hover:underline">Mantras</Link>
      </div>
      
      {/* Slider */}
      <div className="flex justify-end items-center mr-6 mt-6 absolute top-0 right-0">
        <Slider/>
      </div>
      
      {/* Temple Address and Visit Us Button */}
      <div className="absolute bottom-20 right-5 mt-6 mr-6 text-right">
        <p className="text-lg font-bold">Temple Address: Your Address Here</p>
        <Link href="/visit-us">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute top-5 right-0 mr-3 mt-4 border border-black border-black-500 text-white font-bold" style={{backgroundColor:' #BB5A00'}}> VISIT US</button>
        </Link>
      </div>
      
      {/* Notifications */}
      <div className="flex justify-center items-center pr-40 mr-10 mb-16 h-screen"> {/* Added margin-bottom to create gap */}
        <Notifications notificationid={100}/> {/* Place Notifications component here */}
      </div>
      
      {/* Nataraj Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image src='/natrajar.png' alt="Example Image" width={440} height={150} className='absolute bottom-0'/>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-yellow-500 flex justify-center items-center text-black font-bold text-lg">
        <p>&copy; Shri Dharma Sastha Kovil - All rights reserved | <Link href="/know-more">Know More</Link> | <Link href="/contact-us">Contact Us</Link> | <Link href="/feedback">Feedback</Link></p>
      </div>
    </>
  );
};

export default Main;
