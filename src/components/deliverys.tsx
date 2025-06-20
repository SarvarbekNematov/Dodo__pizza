import React from 'react'

const Deliverys = () => {
  return (
    <div className='hidden lg:block px-[15px]'>
        <div className=''>
            <h2 className='text-[36px] font-semibold my-[32px]'>Delivery and payment terms</h2>
            <div className='grid grid-cols-[1.5fr_1.2fr_1fr] gap-[40px]'>
                <div className=''>
                    <h3 className='font-medium text-[18px] text-[#ff6900] uppercase'>60 minutes or pizza for free</h3>
                    <p className='font-medium text-[16px]'>If we don't deliver products, except for souvenirs and sauces, within 60 minutes, you'll get a promo code for a free pizza.</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div>
                        <h3 className='font-medium text-[18px] text-[#ff6900]'>From 59,000 SO’M</h3>
                        <p className='font-medium text-[16px]'>Minimum delivery order price excluding Other category of products is</p>
                    </div>
                    <div>
                        <h3 className='font-medium text-[18px] text-[#ff6900] uppercase'>1,000,000 so’m</h3>
                        <p className='font-medium text-[16px]'>Maximum order value for payment by cash </p>
                        <p className='font-medium text-[16px]'>Product images may differ from ordered products.</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-medium text-[18px] text-[#ff6900] uppercase'>Delivery area is limited</h3>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Deliverys