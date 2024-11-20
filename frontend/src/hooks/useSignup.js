import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const {authUser, setAuthUser} =useAuthContext()
	

	const signup = async ({ name, username, password, confirmpassword, gender }) => {
		const success = handleInputErrors({ name, username, password, confirmpassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			                     //  http://localhost:4000/api/auth/singup
			const res = await fetch("http://localhost:5000/api/auth/singup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, username, password, confirmpassword, gender }),
			});

			// console.log(res)

			const data = await res.json();
			// console.log(data)
			if (data.error) {
				throw new Error(data.error);
				toast.error(data.error)
			}

			localStorage.setItem("chat-user",JSON.stringify(data))
			setAuthUser(data)
			
			
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ name, username, password, confirmpassword, gender }) {
	console.log(name)
	console.log(username)
	console.log(password)
	console.log(confirmpassword)
	console.log(gender)

	if (!name || !username || !password || !confirmpassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmpassword) {
		toast.error("Passwords do not match");
		return false;
	}

	// if (password.length < 6) {
	// 	toast.error("Password must be at least 6 characters");
	// 	return false;
	// }

	return true;
}