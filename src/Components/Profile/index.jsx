import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterestSquare } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
const Data = [
  { id: 1, value:'3.5k' ,  label: 'Followers' },
  { id: 2, value: 150, label: 'Comments' },
  { id: 3, value: 200, label: 'Likes' },
  { id: 4, value: 100, label: 'Shares' },
];
const socialLinks = [
  {id:1, icon: <FaFacebook  />, link: 'https://www.facebook.com/'},
  {
    id: 2, icon: <FaPinterestSquare />, link: 'https://www.pinterest.com/'
  },
  {id: 3, icon: <FaLinkedin/>, link: 'https://www.FaLinkedin.com/'},
  {id:4, icon:<FaSquareTwitter/> , link:"https://www.FaSquareTwitter.com/"},
  {id:5, icon:<FaInstagram/>, link:'https://www.FaInstagram.com/'}
]

const Profile = () => {
  return (
    <main className='pt-5 xl:pt-10 min-h-screen bg-primary2'>
      <section className='flex flex-col items-center justify-center  '>
        <figure>
         <img src="./i(0).png" alt="User Image" className='size-[110px] rounded-full'/>
         </figure>
        <div className='text-center mt-5 md:mt-10 space-y-2'>
         <h1 className='text-xl md:text-2xl font-bold xl:text-4xl'>Totol akther</h1>
          <h2 className='textlg font-semibold'>student of hablu programmer</h2>
          <p className='text-[10px] text-slate-300/80 max-w-[410px] w-auto m-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, rerum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem!</p>

        </div>

      </section>
    
          {/* profile section */}
    <section className='flex  justify-around items-center gap-2  sm:gap-5 mt-10 px-2 sm:px-5  bg-primary1/30 w-full py-5 not-last:border-r border-grayText '>
     {
      Data.map(( i) => (
      <div key={i.id} className='bg-primary2 w-full p-2 sm:p-5 not-last:border-r border-grayText/50 text-center rounded-lg '>
       <h5>{i.value}</h5>
       <p>{i.label}</p>
      </div> 
      ))
     }
    </section>


      {/* social link */}
   <section className='bg-primary2 text-white/70 '>
   <div className=' flex items-center justify-center gap-5   sm:gap-10 mt-5 mb-5 px-2 sm:px-5  w-full py-5 md:py-10  bg-primary2 rounded-xl  '>
  {socialLinks.map((i) => (
  <a 
  href={i.id} 
  key={i.id}
  target='_blank'
  className='text-xl lg:text-3xl cursor-pointer hover:scale-[1.1]'>
    {i.icon}</a>
  ))

  }
  </div>
   </section>

    </main>
  )
}

export default Profile;
