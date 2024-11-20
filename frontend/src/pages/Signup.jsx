
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {

	const [input,setinput]=useState({
		name:"",
		username:"",
		password:"",
		confirmpassword:"",
		gender:""
	})

	const {loading,signup}=useSignup()

	const handlecheckboxchange=(gender)=>{
		setinput({...input,gender})
	}

	const handlesubmit=async(e)=>{
		e.preventDefault()
		await signup(input)
		console.log(input)
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handlesubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' value={input.name} onChange={(e)=>setinput({...input,name:e.target.value})} className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' value={input.username} onChange={(e)=>setinput({...input,username:e.target.value})} className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text '>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={input.password}
							onChange={(e)=>setinput({...input,password:e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={input.confirmpassword}
							onChange={(e)=>setinput({...input,confirmpassword:e.target.value})}
						/>
					</div>

					<GenderCheckbox oncheckboxchange={handlecheckboxchange} selectedGender={input.gender} />

					<Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;