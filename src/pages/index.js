import Image from 'next/image';
import Link from 'next/link';
import Slider from '@/components/Slider';
import { RxDropdownMenu } from "react-icons/rx";
import Notifications from './Notifications/Notifications.js';
import { FaVolumeUp, FaBell } from 'react-icons/fa'; // Import volume and bell icons from react-icons/fa
import { useState } from 'react';

const Main = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    const audio = new Audio('/audio/om_namah.mp3');
    audio.play();
    setIsPlaying(true);
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
  };

  return (
    <>
      <div className="relative">
        <div className='absolute top-0 w-full bg-yellow-500 font-bold flex items-center px-4 py-2'>
          <div>
            <Image src="/temple_logo.png" alt="Temple Logo" width={45} height={20} className="mr-2" />
          </div>
          <h2 className='mt-4 ml-2'>SHRI DHARMA SASTHA KOVIL</h2>
          {/* Add OM NAMAH SIVAYA text and volume icon */}
          <div className="ml-auto flex items-center"> {/* Adjusted margin and alignment */}
            <p className="text-lg font-bold mr-2">OM NAMAH SHIVAYA</p> {/* OM symbol */}
            <FaVolumeUp className={`cursor-pointer ${isPlaying ? 'text-yellow-500' : 'text-black-500'}`} onClick={playAudio} />
          </div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute top-0 right-0 mr-3 mt-4 border border-solid border-black-500 text-white" style={{backgroundColor:' #BB5A00'}}> CONTACT US</button>
        </div>
        
        {/* Navigation Bar */}
        <div className="absolute top-16 w-full bg-red-900 text-white font-bold">
          <div className='text-white font-bold py-2 flex justify-center'>
            <RxDropdownMenu className="text-4xl text-white" />
            <Link href='/home' className='ml-4'>Home</Link>
            <Link href='/about' className='ml-4'>About</Link>
            <Link href='/events' className='ml-4'>Events</Link>
            <Link href='/dharshan' className='ml-4'>Dharshan</Link>
            <Link href='/gallery' className='ml-4'>Gallery</Link>
            <Link href="/notifications" className="ml-auto">
              <FaBell className="text-white text-3xl cursor-pointer" />
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-1 h-full"></div> {/* Vertical line */}
      </div>
      
      {/* Content - MANTRAS OM-SYMBOL TEMPLE TIMINGS */}
      <div className="absolute top-32 w-full text-center mt-0 font-bold ">
        <Link href="/temple-timings" className="text-lg font-bold hover:underline">Temple Timings</Link><span className="mx-4">&#x0950;</span><Link href="/om-symbol" className="text-lg font-bold hover:underline">&#x0950;</Link><span className="mx-4"></span><Link href="/mantras" className="text-lg font-bold hover:underline">Mantras</Link>
      </div>
      
      {/* Slider */}
      <div className="absolute top-0 right-0">
        <Slider/>
      </div>
      
      {/* Temple Address and Visit Us Button */}
      <div className="absolute bottom-20 right-5 text-right">
        <p className="text-lg font-bold">Temple Address: Your Address Here</p>
        <Link href="/visit-us">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border border-black border-black-500 text-white font-bold" style={{backgroundColor:' #BB5A00'}}> VISIT US</button>
        </Link>
      </div>
      
      {/* Notifications */}
      <div className="flex justify-center items-center pb-20">
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
