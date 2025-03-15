import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)
    // sample array for location
    const locations = [
        "3 Tower, INFINITY THINK TANK, Sector V, Kolkata",
        "2B Tower, INFINITY PULL TANK, Sector IV, Kolkata",
        "5C Tower, GP BLOCK, Sector I, Kolkata",
        "18B Tower, RDB CINEMAS, Sector V, Kolkata"
    ]
    return (
        <div>
            {/* this is just a sample data */}
            {
                locations.map(function(elem){
                    return <div onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-1 rounded-xl my-2  border-white   active:border-black items-center justify-start'>
                    <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel