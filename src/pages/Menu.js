import React from 'react';
import '../styles/menu.css';
import Likas_Logo from '../images/LikasLogo.jpg';

const Menu = () => {
  return (
    <>
      <div
        className='md:lg:xl:px-40   md:border-t border-b md:py-20 bg-opacity-10'
        style={{
          backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')`,
        }}
      >
        <div className='w-full bg-black shadow-xl shadow-indigo-200 py-10 px-20 flex flex-wrap justify-center items-center text-center'>
          <p className=' text-white text-center'>
            {' '}
            <span className='text-4xl font-medium text-center'>
              BROWSE <span className='text-red-500 text-4xl'>THE </span> MENU
            </span>{' '}
            <br />
          </p>
          <span className='p-5 rounded-full text-white shadow-sm shadow-[#f22613] m-4'>
            <img
              src={Likas_Logo}
              alt='likas Logo'
              srcset=''
              className='h-24 w-24'
            />
          </span>
        </div>
        <div className='grid grid-cols-1 md:lg:xl:grid-cols-2 group bg-white shadow-xl shadow-neutral-100 border '>
          <div className='p-2 md:p-10 flex flex-col items-start text-center group  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer'>
            <p
              className='text-xl md:text-3xl font-medium text-slate-700 mt-3 border-b border-[#f22613]'
              style={{
                color: '#333333',
                lineHeight: '68.5px',
                fontFamily:
                  'Open Sans, Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              LIKA'S SPECIALS
            </p>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Ukwa
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 5000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Ofe Akwu
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Nkwobi
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 4000
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Chicken Nkwobi
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 8000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Isi-ewu
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 5000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Abacha & Titus
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 3000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Abacha & Kpomo.
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Ugba & Stockfish
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 3500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Cowtail Peppersoup
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 3500
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Assorted Peppersoup
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 3000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Goatmeat Peppersoup
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 3000
              </span>
            </div>
            <div className='flex justify-between  md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Catfish Peppersoup
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 4000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Vegetable Snail
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 3500
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Peppered Snail
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 3500
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Peppered Goatmeat
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 5000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Peppered Beef
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 2500
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Peppered Chicken
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 3000
              </span>
            </div>
          </div>

          {/* LIKA'S RICE SPECIALS  */}
          <div className='p-2 md:p-10 flex flex-col items-start text-center group  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer'>
            <p
              className='text-xl md:text-3xl font-medium text-slate-700 mt-3 border-b border-[#f22613]'
              style={{
                color: '#333333',
                lineHeight: '68.5px',
                fontFamily:
                  'Open Sans, Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              LIKA'S RICE SPECIALS
            </p>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                LIKA'S Native Rice
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Classic jollof
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Coconut Rice
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
          </div>
          {/* LIKA'S Native Culture  */}
          <div className='p-2 md:p-10 flex flex-col items-start text-center group  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer'>
            <p
              className='text-xl md:text-3xl font-medium text-slate-700 mt-3 border-b border-[#f22613]'
              style={{
                color: '#333333',
                lineHeight: '68.5px',
                fontFamily:
                  'Open Sans, Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              LIKA'S Native Culture
            </p>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Egusi
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Oha
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Bitter-leaf
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Ogbono
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Banga
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Vegetable Soup
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Nsala
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 3000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Seafood Okro
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 5000
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Fisherman Soup
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 5000
              </span>
            </div>
          </div>
          {/* CHOICE OF SWALLOW  */}
          <div className='p-2 md:p-10 flex flex-col items-start text-center group  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer'>
            <p
              className='text-xl md:text-3xl font-medium text-slate-700 mt-3 border-b border-[#f22613]'
              style={{
                color: '#333333',
                lineHeight: '68.5px',
                fontFamily:
                  'Open Sans, Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              CHOICE OF SWALLOW
            </p>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Pounded Yam
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 1000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Semo
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 800
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Fufu
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Garri
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 500
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Plantain Flour
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 1000
              </span>
            </div>
          </div>
          {/* LIKA'S ACCOMPANIMENTS */}
          <div className='p-2 md:p-10 flex flex-col items-start text-center group  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer'>
            <p
              className='text-xl md:text-3xl font-medium text-slate-700 mt-3 border-b border-[#f22613]'
              style={{
                color: '#333333',
                lineHeight: '68.5px',
                fontFamily:
                  'Open Sans, Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              LIKA'S ACCOMPANIMENTS
            </p>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Chicken
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Beef
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Goatmeat
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Cowleg / Cowtail
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Assorted meat
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Kpanla Fish
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 text-start w-11/12'>
                Croaker Fish
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
            <div className='flex justify-between w-full md:space-x-12 pt-8'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Titus Fish
              </p>
              <span
                className='mt-3 text-sm md:text-xl w-1/12 md:pl-20'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Snails
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 3500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Unripe plantain
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 2000
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Roasted yam/ sauce
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
            <div className='flex justify-between md:space-x-12 pt-8 w-full'>
              <p className='mt-2 text-xl text-slate-500 w-11/12 text-start'>
                Roasted plantain
              </p>
              <span
                className='mt-3 text-sm md:text-xl md:pl-20 w-1/12'
                style={{ color: '#f22613' }}
              >
                ₦ 1500
              </span>
            </div>
          </div>
          {/* LIKA'S Native Culture  */}

          {/* menu list end */}
        </div>
      </div>
    </>
  );
};

export default Menu;
