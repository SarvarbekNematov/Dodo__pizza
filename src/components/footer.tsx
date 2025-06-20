import React from 'react'
import { DodoIcon, FacebookIcon, InstagramIcon, WContactIcon, YoutubeIcon } from '../../public/icons'

const Footer = () => {
  return (
    <div className='max-w-[1320px] mx-auto pb-[40px] mt-[30px]'>
      <div className='flex flex-col-reverse text-white px-[15px] md:flex-row md:justify-between'>
        <div className='md:flex md:gap-[40px] lg:gap-[70px]'>
          <ul className='mt-[20px] flex flex-col gap-[10px]'>
            <li>
              <h4 className='font-medium text-[16px]'>About us</h4>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Dodo Pizza Story</a>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Dodo book</a>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Blog "Power  uma"</a>
            </li>
          </ul>
          <ul className='mt-[20px] flex flex-col gap-[10px]'>
            <li>
              <h4>Work</h4>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">In a pizzeria</a>
            </li>
          </ul>
          <ul className='mt-[20px] flex flex-col gap-[10px]'>
            <li>
              <h4 className='font-medium text-[16px]'>Partnership</h4>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Franchising</a>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Investments</a>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Suppliers</a>
            </li>
          </ul>
          <ul className='mt-[20px] flex flex-col gap-[10px]'>
            <li>
              <h4 className='font-medium text-[16px]'>Interesting facts</h4>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Why do we not use gloves at Dodo Pizza?</a>
            </li>
            <li>
              <a className='text-[#ffffffbf] text-[16px]' href="">Excursions and workshops</a>
            </li>
          </ul>
        </div>
        
        <div className='pt-[20px] flex flex-col gap-[10px]'>
          <div className='flex flex-col-reverse'>
            <a className='text-[26px]' href="">1168</a>
            <p>Call toll free</p>
          </div>
          <a className='text-[#ffffffbf]' href="">feedback@dodopizza.uz</a>
          <span className='block border border-[#ffffff38] mt-[30px] md:hidden'></span>
        </div>
      </div>
        <span className='hidden md:block border border-[#ffffff38] md:mt-[20px]'></span>
      <div className='text-white px-[15px] md:flex md:flex-row-reverse md:justify-between md:mt-[20px] md:items-center'>
        <div>
          <span className='block border border-[#ffffff38] mt-[20px] mb-[20px] md:hidden'></span>
          <ul className='flex gap-[10px]'>
            <li className='w-[42px] h-[42px] bg-[#ffffff1a] p-[4px] rounded-[4px]'>
              <FacebookIcon color='#ffffffbf'/>
            </li>
            <li className='w-[42px] h-[42px] bg-[#ffffff1a] p-[4px] rounded-[4px]'>
              <InstagramIcon color='#ffffffbf'/>
            </li>
            <li className='w-[42px] h-[42px] bg-[#ffffff1a] p-[4px] rounded-[4px]'>
              <WContactIcon color='#ffffffbf'/>
            </li>
            <li className='w-[42px] h-[42px] bg-[#ffffff1a] p-[4px] rounded-[4px]'>
              <YoutubeIcon color='#ffffffbf'/>
            </li>
          </ul>
        </div>
          <span className='block border border-[#ffffff38] mt-[20px] mb-[20px] md:hidden'></span>
        <div className='flex flex-col-reverse gap-[20px] md:flex-row'>
          <div className='flex items-center gap-[10px]'>
            <div className='w-[120px] h-[25px]'>
              <DodoIcon color='#ffffffbf'/>
            </div>
            <p className='text-[#ffffffbf]'>© 2025</p>
          </div>
          <div>
            <p className='text-[#ffffffbf]'>Legal information</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer