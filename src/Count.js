import React, { useState } from 'react'

export const Count = () => {
    const [count, setCount] = useState(0);
    const [teamOne, setTeamOne] = useState('');
    const [teamTwo, setTeamTwo] = useState('');

    const handleCount = () => {
        setCount(count + 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handleTeamOne = () => {
        setTeamOne('Team is here')
    }

    const handleTeamTwo = () => {
        setTeamTwo('Team is here')
    }

    const handleChangeOne = (e) => {
        setTeamOne(e.target.value)
    }

    const handleChangeTwo = (e) => {
        setTeamTwo(e.target.value)
    }


    return (
        <div className=' text-white'>
            <h1
                className='flex justify-center mt-10 mb-5 text-xl font-bold'
            >
                    What teams are playing?
            </h1>
            <div
                className='flex justify-center grid-cols-2 space-x-8'
            >
                <input
                    type='text'
                    placeholder='Team 1...'
                    className='rounded p-1 text-black'
                    onChange={handleChangeOne}
                />
                <input
                    type='text'
                    placeholder='Team 2...'
                    className='rounded p-1 text-black'
                    onChange={handleChangeTwo}
                />
            </div>
            {/* <div
                className='flex justify-center grid-cols-2 space-x-40'
            >
                <button 
                    className='border rounded-xl mt-20 text-lg hover:text-green-400 p-2'
                    onClick={handleTeamOne}
                >
                    submit
                </button>
                
                <button 
                    className='border rounded-xl mt-20 text-lg hover:text-green-400 p-2'
                    onClick={handleTeamTwo}
                >
                    submit
                </button>
            </div> */}

            <h2 className='flex justify-center mt-10 text-xl font-bold'>
                {teamOne} vs {teamTwo}
            </h2>
                <div className='flex justify-center space-x-4'>
                    <button
                        onClick={handleCount} 
                        className='border rounded-xl mt-20 text-lg hover:text-green-400 p-2'
                    >
                        Increase Count
                    </button>
                    <button
                        onClick={handleReset} 
                        className='border rounded-xl mt-20 text-lg hover:text-green-400 p-2'
                    >
                        Reset Count
                    </button>
                </div>
        </div>
    )
}

export default Count;