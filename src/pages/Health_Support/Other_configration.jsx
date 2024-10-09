import React from 'react';

const Index = () => {
  return (
    <>
      <div className="bg-[#F9F9FB] h-full w-full">
        <div className="flex pt-8 pl-10">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/3rd-party.png"
            alt="3rd Party"
          />
          <p className="text-[#334257] pl-3 font-bold text-lg">3rd Party</p>
        </div>
        <div className='bg-white h-[40vh]  shadow w-[71vw] ml-9 mt-40 rounded-lg'>
          <div className='flex pt-3 pl-3 items-center'>
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/whatsapp.png" className='my-2 mx-3 w-5' alt="WhatsApp" />
            <p className='text-[#33427D] font-semibold pt-1'>WhatsApp</p>
            <label htmlFor="check" className='bg-gray-100 relative cursor-pointer w-16 h-8 rounded-full ml-[78%]'>
              <input type="checkbox" id="check" className='sr-only peer' />
              <span className='w-2/5 h-4/5 bg-blue-700 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500'></span>
            </label>
          </div>
          <p className='border-2 border-[#F9F9FB] mt-3'></p>
          <div className='flex'>
          <div className='mt-10 text-[#334257] font-semibold text-sm ml-5'>WhatsUp Number</div>
          <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" className='pt-10 pl-3'/>
          
          </div>
          <input type="text" name="username" placeholder="00000000" className='w-[68vw] h-[5vh] border border-gray-500 rounded ml-4 mt-4'></input>
          <div className='flex'>
          
          <button className="bg-[#EDEDED] px-5 py-2 rounded mt-5 ml-[77%] text-black w-28 mr-12 hover:bg-[#758890] hover:text-white">
            Reset
          </button>
          <button className="bg-[#4c31e4] px-5 py-2 rounded mt-5 ml-[%] text-black w-28 mr-12 hover:bg-[#04A3E7] hover:text-white">
            Save
          </button>

          </div>
        </div>
        
      </div>
    </>
  );
}

export default Index;
