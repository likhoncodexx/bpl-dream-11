import React from 'react';
import bannerImg from '../../../assets/banner-main.png';

import bgShadow from '../../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div

            className=' w-11/12 max-w-[1320px] mx-auto h-[545px] bg-black bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col justify-center items-center gap-6 p-4 mt-10'

            style={{ backgroundImage: `url(${bgShadow})` }}
        >
            <div className='image'>
                <img src={bannerImg} alt="Banner" />
            </div>
            <div className='Main-text text-white text-center'>
                <h2 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-300 mt-4 text-xl'>Beyond Boundaries Beyond Limits</p>
                <button className="btn bg-[#E7FE29] hover:bg-[#d4ed18] text-black font-bold border-none mt-6 px-8 rounded-xl">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Banner;