import { useState } from "react";
import MessageContainer from "../component/message/MessageContainer";
import Sidebar from "../component/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Exp from "../component/sidebar/Exp";

const Home = () => {
	const {authUser}=useAuthContext()
	console.log(authUser)
	
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
			{/* <Exp/> */}
		</div>
	);
};
export default Home;