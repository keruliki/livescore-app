import React from 'react'

export const Scoreboard = (props) => {

  return (
    <div className='grid grid-cols-6 my-2'>
        <div>
            <small>{props.value.status}</small>
        </div>
        <div className='col-span-2'>
            <h1 className='text-lg font-bold'>{props.value.home}</h1>
        </div>
        <div id='score' className='text-center'>
            <p>{props.value.homeScore} - {props.value.awayScore}</p>
        </div>
        <div className='col-span-2 text-right'>
            <h1 className='text-lg font-bold'>{props.value.away}</h1>
        </div>

    </div>
  )
}
