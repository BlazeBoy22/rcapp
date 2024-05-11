import React from 'react'
import { useState } from 'react'
import Gendercheckbox from './Gendercheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/usesignup'

function Signup() {

  const [inputs,setInputs] = useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:'male'
  })
  const {loading,signup} = useSignup();
  const handleSubmit = async (e)=>{
    console.log('hello jee');
     e.preventDefault();
     await signup(inputs);
    console.log(inputs);
  }
  return (
    <div className="
     
    h-full w-full bg-cyan-800 rounded-md bg-clip-padding backdrop-filter   bg-opacity-40 border border-gray-100 "
    >
      <h1 className='text-3xl font-bold text-center text-black opacity-90'>
        Login <span className='text-purple-900'>ChatApp</span>
      </h1>
      <form className='flex flex-col items-center justify-center h-[90%]' onSubmit={handleSubmit}>
        <div >
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="fullName"  value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Username" value={inputs.userName} onChange={(e)=>setInputs({...inputs,userName:e.target.value})} />
          </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow"  placeholder='password' value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow"  placeholder='confirmpassword' value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} />
        </label>
        <Gendercheckbox inputs={inputs} setInputs={setInputs}   selectedGender={inputs.gender} ></Gendercheckbox>
        </div>
        <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"already "} have an account? </Link>
        <div>
          <button className="p-3 rounded-lg bg-green-800 transition-colors duration-1000 hover:btn hover:glass font-bold text-yellow-400"  >sign up </button>
        </div>
      </form>
    </div>
  )
}

 

export default Signup


//starter code for signup
// import React from 'react'
// import Gendercheckbox from './Gendercheckbox'

// function Signup() {
//   return (
//     <div className="
     
//     h-full w-full bg-cyan-800 rounded-md bg-clip-padding backdrop-filter   bg-opacity-40 border border-gray-100 "
//     >
//       <h1 className='text-3xl font-bold text-center text-black opacity-90'>
//         Login <span className='text-purple-900'>ChatApp</span>
//       </h1>
//       <form className='flex flex-col items-center justify-center h-[90%]'>
//         <div >
//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
//           <input type="text" className="grow" placeholder="Email" />
//         </label>
//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
//           <input type="text" className="grow" placeholder="Username" />
//           </label>
//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
//           <input type="password" className="grow"  placeholder='password' />
//         </label>
//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
//           <input type="password" className="grow"  placeholder='confirmpassword' />
//         </label>
//         <Gendercheckbox></Gendercheckbox>
//         </div>
//         <a href='login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"already "} have an account? </a>
//         <div>
//           <button className="p-3 rounded-lg bg-green-800 transition-colors duration-1000 hover:btn hover:glass font-bold text-yellow-400">sign up </button>
//         </div>
//       </form>
//     </div>
//   )
// }

 

// export default Signup