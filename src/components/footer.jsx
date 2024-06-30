import React from 'react'

export const Footer = () => {
  return (
    <>
<footer className="footer p-10 bg-black text-white z-50 relative">
  <aside className='space-y-6'>
  <img src="../frame.svg" width={265}/>
    <p className='text-sm font-light font-[BentonSans-Regular]'>
    stay connected with our latest updates follow us 
      <br />
      on our social media platforms.
    </p>   
     <div className="grid grid-flow-col gap-4 text-white">
     <img src="../social-media/whatsapp.svg" width={25}/>
     <img src="../social-media/facebook.svg" width={25}/>
     <img src="../social-media/instagram.svg" width={35}/>
     <img src="../social-media/youtube.svg" width={30}/>
     <img src="../social-media/linkedin.svg" width={35}/>
    </div>
    <form>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white text-lg">We are pleased to hear from you</span>
      </label>
      <div className="join">
  <input className="input rounded-l-full join-item bg-transparent border-1 border-white border-r-0" placeholder="Email" />
  <button className="btn join-item rounded-r-full bg-transparent border-l-0">

  <img src="../arrow.svg" className='text-white' width={35}/>
  </button>
</div>

    </fieldset>
  </form>
  </aside>
  <nav>
    <h6 className="footer-title">quick Links</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Development</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Media Center</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Development</h6>
    <div className='grid grid-cols-2 gap-28'>
       <div className='flex flex-col space-y-2'>
    <a className="link link-hover">West</a>
    <a className="link link-hover">Talla</a>
    <a className="link link-hover">Terrace</a>
    <a className="link link-hover">Terrace Clincs</a>
    <a className="link link-hover">New Project 1 <span className='text-[#7d6131]'>(new)</span></a>
        </div> 
        <div className='flex flex-col space-y-2'>
       <a className="link link-hover">East</a>
    <a className="link link-hover">Le Rois</a>
    <a className="link link-hover">SQl</a>
    <a className="link link-hover">Talda</a>
    <a className="link link-hover">The Gray</a>
    <a className="link link-hover">New Project 1 <span className='text-[#7d6131]'>(new)</span></a>
        </div> 
    </div >
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <a className="link link-hover text-white flex space-x-2 w-full">
    <img src="../phone.svg" width={15}/>
    <span className='font-mono'>19845</span>
    </a>
    <a className="link link-hover  flex space-x-2 w-full">
    <img src="../Message.svg" width={15}/>
    <span className='font-mono'>INFO@HDP.COM.EG</span>
    </a>
    <a className="link link-hover flex space-x-2 items-start w-full">
    <img src="../Location.svg" width={15}/>
    <span className='font-mono'>
        <span className='pb-10'>
        <strong className> Sheikh Zayed Office:</strong> Building B1, 5th 
    <br/>
    floor – Majarrah 26th of July Corridor, 
    <br/>
    Al Sheikh Zayed – Giza
    <br/>
    </span>
    <span>
    <strong>New Cairo Office:</strong> Pearl Des Rois, 
    <br/>
    Building B4, 3rd floor, 
    <br/>
    New Cairo, Cairo, Egypt. 
    </span>
    </span>
    </a>
  </nav>
</footer>
<footer className="footer bg-black text-base-content border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center">
   <div className='text-white space-x-2'>
   <a className="link link-hover font-[BentonSans-Regular]">Privacy</a>
    <a className="link link-hover font-[BentonSans-Regular]">Terms & Conditions</a>
   </div>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4 text-white">
     <p className='font-[BentonSans-Regular]'>
     © 2024 — Copyright
     </p>
    </div>
  </nav>
</footer>

    </>
  )
}
