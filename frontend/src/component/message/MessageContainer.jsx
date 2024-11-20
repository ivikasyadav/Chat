import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useCOnversion";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();


	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<Nochatselected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.name}</span>
					</div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const Nochatselected = () => {
	const {authUser}=useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome {authUser.name}</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
};
