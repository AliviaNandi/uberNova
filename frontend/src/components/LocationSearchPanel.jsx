import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);
    
    // sample array for location 
    const locations =[
        "76 Udaypur main road , Nimta",
        "186 Udaypur 1st lane , Nimta",
        "75 Udaypur main road , Nimta",
        "10 Udaypur main road , Nimta"
    ]
  return (
    <div>
        {/* sample data */}
        {
            locations.map(function(elem,idx){
                return <div  key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex border-2 border-gray-100 active:border-black items-center p-3 rounded-xl my-4 justify-start '>
                <h2 className='bg-[#eee] h-10 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel