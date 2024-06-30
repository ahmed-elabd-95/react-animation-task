import React from 'react'

function HeroSection() {
  return (
    
    <div className="relative h-screen w-full overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="../hero.mp4"
      autoPlay
      loop
      muted
    />
    <div className="relative z-10 flex items-end justify-end sm:justify-end h-full bg-black bg-opacity-50">
      <div className='absolute left-[12%] sm:left-1/3 bottom-1/4'>
        <a href="#" className="">
          <img src="./plus.png" alt="" />
        </a>
      </div>
      <div>
        <a href="#" className="">
          <img src="./dream.png" alt="" className='h-[560px]' />
        </a>
      </div>
    </div>
  </div>
  )
}

export default HeroSection