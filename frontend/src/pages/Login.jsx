import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';
import toast from 'react-hot-toast';

function Login() {
  const [formData,setFormData] = useState({username:'',password:''});
  const {login}  = useLogin( );
  console.log(formData);
  const handleChange = (event)=>{
    setFormData((items)=>({...items,[event.target.name]:event.target.value}))
    console.log(formData,event.target.value);
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const res = await login(formData);
    if(!res)
      {
        toast.error('login error');
        return ;
      }
    toast.success('logged in ');
    // console.log('printing loign res',res);
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Username" name='username' onChange={handleChange} value = { formData.username} />
          </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow"  placeholder='********' name='password' onChange={handleChange} value={formData.password  }/>
        </label>
        </div>
        <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"don't"} have an account? </Link>
        <div>
          <button className="p-3 rounded-lg bg-green-800 transition-colors duration-1000 hover:btn hover:glass ">Login </button>
        </div>
      </form>
    </div>
  )
}

export default Login



//starter code for login
// function Login() {
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
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
//           <input type="text" className="grow" placeholder="Username" />
//           </label>
//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
//           <input type="password" className="grow"  placeholder='********' />
//         </label>
//         </div>
//         <a href='signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"don't"} have an account? </a>
//         <div>
//           <button className="p-3 rounded-lg bg-green-800 transition-colors duration-1000 hover:btn hover:glass ">Login </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login

