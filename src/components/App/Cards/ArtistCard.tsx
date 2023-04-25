import React from 'react'

interface IArtistCard{
    artistImage: string,
    artistName: string,
}

const ArtistCard = ({artistImage, artistName}: IArtistCard) => {
  return (
    <div className='flex flex-row space-x-4 items-center'>
        {/* Artists Image */}
        <div className="bg-white p-3 rounded-full">
            <img src={''} alt="123" />
        </div>
        {/* Artists Name */}
        <p className='text-white font-bold'>{artistName}</p>
    </div>
  )
}

export default ArtistCard