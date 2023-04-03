

import React, { ChangeEvent, useState } from 'react'
import SearchIcons from '../../assets/icons/search.png'
import { trackShipment } from '../../services/trackingService'

interface SearchBarProps{
    onSubmit:(trackingNumber:string)=>void
}

export function SearchBar (props:SearchBarProps) {
    const {onSubmit}= props;
    
    const [trackingNumber, setTrackingNumber] = useState<string>('')

    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setTrackingNumber(e.target.value) 
    }

    const handleSearch =async ()=>{
        onSubmit(trackingNumber)
    }

    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
          handleSearch()
        }
      };

  return (
    <div className=' flex shadow-[rgba(0,_0,_0,_0.24)_0px_2px_8px] h-14 w-full lg:w-1/2'>
        <input
            className='rounded-l-lg focus:outline-0 h-14 w-full pl-4'
            placeholder="Tracking No."
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            
        />
        <button className='h-14 bg-[#E43F21] w-14 rounded-r-lg flex justify-center items-center' onClick={handleSearch}>
            <img src={SearchIcons} alt='search-icon' className='w-8'/>
        </button>

    </div>
  )
}

