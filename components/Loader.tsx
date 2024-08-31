import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='loader'>
        <Image src="/assets/icons/loader.svg" height={32} width={32} className='animate-spin' alt='loader' />
        Loading...
    </div>
  )
}

export default Loader