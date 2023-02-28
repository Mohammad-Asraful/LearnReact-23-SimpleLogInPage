import './App.css';
import { ImWindows } from "react-icons/im";
import { IoLogoFigma } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Profile from '../src/Image/profile.jpg'

function App() {
  return (
    <>
      <section>

        <div className='main-div w-full my-0 mx-auto'>

          {/* card 1 */}
          <div className='signin p-10'>

            <div className='grid justify-center mb-5'>
              <ImWindows />
            </div>

            <div className='text-center mb-5'>
              <h3 className='text-xl font-bold'>Create an account</h3>
              <small>Start your 30 day free trial</small>
            </div>

            <button className='flex items-center gap-2 rounded-full border px-2 py-1 w-full justify-center font-bold'>
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

              <div>
                <label htmlFor="">Password</label>
                <br />
                <input className='rounded-full border px-2 py-1 w-full' type="password" placeholder='*********' />
                <small>Must be at least 8 charecters</small>
              </div>

              <button className='rounded-full border px-2 py-1 w-full bg-blue-700 text-white'>Create account</button>

              <p className='text-center mt-2'>Been here before? <a className='font-bold' href="@">Log in</a></p>

            </form>

            <div className='flex justify-between mt-5'>
              <p>&copy; 2022 Rejiggle</p>

              <div className='flex gap-3'>
                <a href='@'>Terms</a>
                <a href='@'>Privacy</a>
              </div>

            </div>

          </div>

          {/* Card 2 */}

          <div className='signin-details p-10'>

            <div>

              <div className='text-emerald-500 w-8 h-8 bg-white grid justify-center items-center rounded-full mb-2 text-xl'>
                <IoLogoFigma />
              </div>

              <h1 className='lg:text-5xl lg:w-96 md:w-96 sm:w-60 sm:text-3xl font-bold'>Save thousand of design hours</h1>

              <p className='opacity-70'>Join thousands of designers and mockup high-quality landing pages in minutes</p>
            </div>

            <div className='flex gap-3 mt-4'>
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
    </>
  )
}

export default App;
