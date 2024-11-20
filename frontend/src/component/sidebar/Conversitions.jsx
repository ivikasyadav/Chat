import useGetConversations from '../../hooks/useGetconvesition'
import Conversation from './Conversition'

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    // Ensure conversations is an array
    const safeConversations = Array.isArray(conversations) ? conversations : [];

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {safeConversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx === safeConversations.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};
export default Conversations;
