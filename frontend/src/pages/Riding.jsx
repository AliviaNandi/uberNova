import React from 'react'
import {Link} from 'react-router-dom'
const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 block h-10 w-5 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>
            <div className='h-1/2 '>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
                <img className='h-20' src="data:image/jpeg;base64,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" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Alivia</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>WB 05 AB 1234</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
            </div>

            <div className='flex gap-2 flex-col justify-between items-center'>
                <div className='w-full mt-5'>
                    
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-map-pin-2-fill text-lg "></i>
                        <div className=' '>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Sangathani Club ,Udaypur</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div className=' '>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Sangathani Club ,Udaypur</p>
                        </div>
                    </div>
                </div>
            </div>
                <button className='w-full mt-5 bg-green-400 rounded-lg text-white font-semibold p-2'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding