
import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessage";
import MessageSkeleton from "../MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenmessage";

const Messages = () => {

	const { messages, loading } = useGetMessages();
	const lastmessage = useRef()
	useListenMessages()

	useEffect(() => {
		// lastmessage.current?.scrillIntoView({behavior:"smooth"})
		lastmessage.current?.scrollIntoView({ behavior: "smooth" });
	})

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages.length > 0 && messages.map((message) => (
				<div key={message._id} ref={lastmessage}><Message message={message} /></div>
			))}


			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (<p>Send Message to start Conversition</p>)}
		</div>
	);
};
export default Messages;