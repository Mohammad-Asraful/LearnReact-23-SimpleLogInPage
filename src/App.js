import './App.css';
import { ImWindows } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FiFigma } from "react-icons/fi";
import Profile from '../src/Image/profile.jpg'

function App() {
  return (
    <section>

      <div className='main-div w-full'>

        {/* card 1 start*/}
        <div className='signin p-5 lg:p-8 md:p-8 sm:p-5'>

          <div className='grid justify-center mb-5'>
            <ImWindows />
          </div>

          <div className='text-center mb-5'>
            <h3 className='text-xl font-bold'>Create an account</h3>
            <small>Start your 30 day free trial</small>
          </div>

          <button className='px-2 py-1 mb-3 flex items-center gap-2 rounded-full border w-full justify-center font-bold text-xs 
          lg:text-lg
          md:text-base
          sm:text-sm'>
            <FcGoogle /> Sign up with Google
          </button>

          <form action="">

            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input className='rounded-full border px-2 py-1 w-full' type="text" placeholder='What shall we call you?' />
            </div>

            <div>
              <label htmlFor="">Email address</label>
              <br />
              <input className='rounded-full border px-2 py-1 w-full' type="email" placeholder='you@domain.com' />
            </div>

            <div className='mb-3'>
              <label htmlFor="">Password</label>
              <br />
              <input className='rounded-full border px-2 py-1 w-full' type="password" placeholder='*********' />
              <small>Must be at least 8 charecters</small>
            </div>

            <button className='rounded-full border px-2 py-1 w-full bg-blue-700 text-white'>Create account</button>

            <p className='text-center mt-2 text-xs 
            lg:text-lg
            md:text-base
            sm:text-sm
            '>Been here before? <a className='font-bold' href="@">Log in</a></p>

          </form>

          <div className='mt-5 flex flex-col items-center justify-between text-xs
          lg:flex-row lg:text-lg 
          md:flex-row md:text-base
          sm:flex-col sm:items-center'>
            <p>&copy; 2022 Rejiggle</p>

            <div className='flex flex-col 
            lg:flex-row  lg:gap-3 
            md:flex-row md:gap-3  
            sm:flex-col sm:gap-0'>
              <a href='@'>Terms</a>
              <a href='@'>Privacy</a>
            </div>

          </div>

        </div>

        {/* Card 2 start*/}

        <div className='signin-details p-5 lg:p-10 md:p-10 sm:p-5'>

          <div>

            <div className='text-emerald-500 w-8 h-8 bg-white grid justify-center items-center rounded-full mb-2 text-xl'>
              <FiFigma />
            </div>

            <h1 className='font-bold lg:text-5xl lg:w-96 md:w-48 sm:w-48 sm:text-2xl'>Save thousand of design hours</h1>

            <p className='opacity-70 mt-5 text-xs
              lg:w-96 lg:text-base 
              md:w-52 md:text-base 
              sm:w-48 sm:text-sm'>Join thousands of designers and mockup high-quality landing pages in minutes</p>
          </div>

          <div className='mt-4 flex flex-col items-center
          lg:flex lg:flex-row 
          md:flex md:flex-row md:items-center 
          sm:flex sm:flex-row sm:items-center 
          gap-3'>
            <div className='flex'>
              <img className='w-[20px] h-[20px] rounded-full' src={Profile} alt="This is a profile" />
              <img className='w-[20px] h-[20px] rounded-full -ml-2' src={Profile} alt="This is a profile" />
              <img className='w-[20px] h-[20px] rounded-full -ml-2' src={Profile} alt="This is a profile" />
              <img className='w-[20px] h-[20px] rounded-full -ml-2' src={Profile} alt="This is a profile" />
              <img className='w-[20px] h-[20px] rounded-full -ml-2' src={Profile} alt="This is a profile" />
            </div>

            <small>Join 60,000+ users</small>
          </div>

        </div>

      </div>

    </section>
  )
}

export default App;
