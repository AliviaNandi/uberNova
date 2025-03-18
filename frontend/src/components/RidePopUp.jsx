import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-xl'>
                <div className='flex items-center gap-3'>
                    <img className='h-14 w-14 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className='text-lg font-medium'>Alivia Nandi</h2>
                </div>
                <h5 className='text-lg font-medium'>2.2KM</h5>
            </div>
            <div className='flex gap-2 flex-col justify-between items-center'>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div className=' '>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Sangathani Club ,Udaypur</p>
                        </div>
                    </div>
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
            <div className='flex w-full mt-5 items-center justify-between'>
            <button onClick={() => {
                props.setRidePopupPanel(false)
            }} className='bg-gray-400  mt-2 text-gray-300 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
            <button onClick={() => {
                props.setConfirmRidePopupPanel(true)
            }} className='bg-green-400  mt-5 text-white font-semibold p-3 px-10 rounded-lg'>Accept Ride</button>

            
        </div>
        </div>
        </div>
    )
}

export default RidePopUp