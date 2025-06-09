import React from 'react'

const Profile = () => {
  return (
    <main className='pt-5 xl:pt-10 min-h-screen'>
      <section className='flex flex-col items-center justify-center  '>
        <figure>
         <img src="./i(0).png" alt="User Image" className='size-[150px] rounded-full'/>
         </figure>
        <div className='text-center mt-5 md:mt-10 space-y-2'>
         <h1 className='text-xl md:text-2xl font-bold xl:text-4xl'>Totol akther</h1>
          <h2 className='textlg font-semibold'>student of hablu programmer</h2>
          <p className='text-sm text-slate-300/80 max-w-[450px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, rerum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem!</p>

        </div>





      </section>
    
    </main>
  )
}

export default Profile
