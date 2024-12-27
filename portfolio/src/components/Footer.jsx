import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1a1a1a] flex flex-col justify-center flex-wrap items-center w-full h-[450px] md:h-[250px] pt-2 gap-4 pb-3'>
      <img src="/Images/footer.png" className='w-[20px] h-[20px]' alt="" />
      <p className='text-white mb-6'>BACK TO TOP</p>
      <div className='flex flex-col mb-5 md:flex-row gap-4'>
        <img src="/Images/fb.png" alt="" />
        <img src="/Images/lkdin.png" alt="" />
        <img src="/Images/insta.png" alt="" />
        <img src="/Images/msg.png" alt="" />
      </div>
      <p className='text-base font-medium flex flex-wrap text-white'>@2020 Tomasz  Gajda  <span className='text-sm'>  All Rights Reserved.</span></p>
    </div>
  )
}

export default Footer
