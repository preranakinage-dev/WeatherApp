import React from 'react'

const Forecast = ({title, data}) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-1' />

            <div className='flex items-center justify-between'>
                {data.map((d, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center justify-center'
                    >
                        <p className='font-light text-sm'>{d.title}</p>
                        <img 
                        src={d.icon} 
                        alt='weather icon'
                        className='w-12 my-1'/>
                        <p className='font-medium'>{d.temp.toFixed()}°</p>
                        {/* <p className='font-medium'>`${d.temp}°`</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast




// https://api.openweathermap.org/data/2.5/weather?q=london&appid=657eb5be5dca4aa4163df6ba8839ecbc
// https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=657eb5be5dca4aa4163df6ba8839ecbc