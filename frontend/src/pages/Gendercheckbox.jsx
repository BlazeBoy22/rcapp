/* eslint-disable react/prop-types */
import React from 'react'

function Gendercheckbox({inputs,setInputs,selectedGender}) {
  return (
    <div className='flex gap-5 justify-center mt-[4%]'>
        <div className='flex gap-2'>
        <label name='gender'  >Male</label>
        <input type="radio" name='gender'  
        className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
          checked={selectedGender==='male'}
            onChange={()=>setInputs({...inputs,gender:"male"})}
          />
        </div>
        <div className='flex gap-2'>
        <label name='gender' id='checkbox'>Female</label>
        <input type="radio" name='gender' checked={selectedGender==='female'} 
         className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" 
          onChange={()=>setInputs({...inputs,gender:'female'})}
         />
        </div>   
    </div>
  )
}

export default Gendercheckbox