import { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';


const WeatherForm = ({ handleChangeCity }) => {
    const [city, setCity] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city !== null && city.trim()) {
            handleChangeCity(city);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value
        setCity(value);
    };

    return (
        <div className='w-11/12 md:w-2/3 lg:w-2/6 2xl:w-2/5 mx-auto mt-14 bg-gray-900 opacity-90 p-3 rounded-lg'>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center gap-2 w-full'>
                    <input type="text" className='w-11/12 px-2 py-2 rounded-lg 	' onChange={handleChange} placeholder="Ingresa el nombre de la ciudad" />
                    <div className='bg-gray-200 flex justify-center p-3 rounded-lg'>
                        <button type='submit'><BiSearchAlt /></button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default WeatherForm