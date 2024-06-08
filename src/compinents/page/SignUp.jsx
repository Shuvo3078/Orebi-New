import React, { useState } from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";
import yes from "../../assets/checkbox01.png";
import no from "../../assets/checkbox02.png";


const SignUp = () => {

    let [show, setShow]=useState(false)
    let [show1, setShow1]=useState(false)
    let [show2, setShow2]=useState(false)
    let [show3, setShow3]=useState(false)
    let [show4, setShow4]=useState(false)
    let [show5, setShow5]=useState(false)
    let [show6, setShow6]=useState(false)
    let [show7, setShow7]=useState(false)
    let [show8, setShow8]=useState(false)
    let [show9, setShow9]=useState(false)
    let [show10, setShow10]=useState(false)
    let [show11, setShow11]=useState(false)
    let [eye, setEye]=useState(false)
    let [checkbox, setCheckbox]=useState(false)

  return (
    <Container className='pt-32'>
        
        <Breadcrum text='Sign up'/>
        
        <div className='border-b border-[#F0F0F0] pb-[62px]'>
        <p className='max-w-[644px] mt-32 font-DM text-base text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className='main border-b border-[#F0F0F0] pb-[69px]'>
            <h2 className='text-[#262626] text-4xl  font-bold mt-14 mb-[42px]'>Your Personal Details</h2>
            
            <div className='flex flex-wrap gap-x-10 gap-y-6'>
            <div onClick={()=> setShow(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show && 'top-[0px]'}`} htmlFor=''>First Name</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='text' placeholder={`${show?"First Name":""}`}/>
            </div>
            <div onClick={()=> setShow1(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show1 && 'top-[0px]'}`} htmlFor=''>Last Name</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='text' placeholder={`${show1?"Last Name":""}`}/>
            </div>
            <div onClick={()=> setShow2(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show2 && 'top-[0px]'}`} htmlFor=''>Email address</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='email' placeholder={`${show2?"company@domain.com":""}`}/>
            </div>
            <div onClick={()=> setShow3(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show3 && 'top-[0px]'}`} htmlFor=''>Telephone</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='number' placeholder={`${show3?"Your phone number":""}`}/>
            </div>
            </div>
        </div>
        <div className='main border-b border-[#F0F0F0] pb-[69px]'>
            <h2 className='text-[#262626] text-4xl  font-bold mt-14 mb-[42px]'>New Customer</h2>
            
            <div className='flex flex-wrap gap-x-10 gap-y-6'>
            <div onClick={()=> setShow4(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show4 && 'top-[0px]'}`} htmlFor=''>Address 1</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='text' placeholder={`${show4?"4279 Zboncak Port Suite 6212":""}`}/>
            </div>
            <div onClick={()=> setShow5(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show5 && 'top-[0px]'}`} htmlFor=''>Address 2</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='text' placeholder={`${show5?"—":""}`}/>
            </div>
            <div onClick={()=> setShow6(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show6 && 'top-[0px]'}`} htmlFor=''>City</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='email' placeholder={`${show6?"Your city":""}`}/>
            </div>
            <div onClick={()=> setShow7(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show7 && 'top-[0px]'}`} htmlFor=''>Post Code</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='number' placeholder={`${show7?"05228":""}`}/>
            </div>
            <div onClick={()=> setShow8(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show8 && 'top-[0px]'}`} htmlFor=''>Division</label>
            <select className='pt-[33px] pb-4 outline-none' type='text' placeholder={`${show8?"Your city":""}`}>
            <option value='abcd'>{show2?"Please select":""}</option>
            <option value='abcd'>1234</option>
            <option value='abcd'>5678</option>
            <option value='abcd'>2546</option>
            </select>
            </div>
            <div onClick={()=> setShow9(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show9 && 'top-[0px]'}`} htmlFor=''>District</label>
            <select className='pt-[33px] pb-4 outline-none' type='text' placeholder={`${show9?"Your city":""}`}>
            <option value='abcd'>{show2?"Please select":""}</option>
            <option value='abcd'>1234</option>
            <option value='abcd'>5678</option>
            <option value='abcd'>2546</option>
            </select>
            </div>
            
            </div>
        </div>
        <div className='main border-b border-[#F0F0F0] pb-[69px]'>
            <h2 className='text-[#262626] text-4xl  font-bold mt-14 mb-[42px]'>Your Password</h2>
            
            <div className='flex flex-wrap gap-x-10 gap-y-6'>
            <div onClick={()=> setShow10(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show10 && 'top-[0px]'}`} htmlFor=''>Password</label>
            <input
            className='pt-[33px] pb-4 outline-none' type={eye?"text":"password"} placeholder={`${show10?"Password":""}`}/>
            
            {eye? (
            <IoIosEye 
            onClick={()=> setEye(!eye)} 
            className={`absolute right-0 top-1/2 ${show10?" opacity-100" : "opacity-0"}`}/>
            ):(
            <IoIosEyeOff 
            onClick={()=> setEye(!eye)} 
            className={`absolute right-0 top-1/2 ${show10?" opacity-100" : "opacity-0"}`} />
            )}
            </div>
            <div onClick={()=> setShow11(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base absolute  left-0 top-[33px] transition-all duration-300 ${show11 && 'top-[0px]'}`} htmlFor=''>Repeat Password</label>
            <input
            className='pt-[33px] pb-4 outline-none' type='password' placeholder={`${show11?"Repeat Password":""}`}/>
            </div>
            </div>
          
        </div>

        <div className='flex items-center gap-x-4'>
          <input type='checkbox'/>
          <p>I have read and agree to the Privacy Policy</p>
        </div>

        <div className='flex items-center gap-x-4'>
          <p>Subscribe Newsletter</p>
          <div onClick={()=> setCheckbox(!checkbox)}>
          <label htmlFor='yes'className='flex items-center'> 
          <img className={checkbox?"hidden":"block"}  src={yes} alt=''/> 
          <img className={checkbox?"block":"hidden"} src={no} alt=''/><input 
          className='opacity-100 block h-8 w-14 bg-slate-400' id='yes' type='radio' name='id'
          />
          Yes</label>
          </div>


          <label htmlFor='no'className='flex items-center'> 
          <img src={yes} alt=''/> 
          <img className='hidden' src={no} alt=''/><input 
          className='opacity-0' id='no' type='radio' name='id'
          />
          No</label>
          </div>
    </Container>
  );
}

export default SignUp;
