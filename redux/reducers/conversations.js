import {data} from './data';

const initialState={
    conversations:data,
    selectedConversation:{}
};

initialState.selectedConversation=initialState.conversations[0];

export const conversationsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "selected_conversation_changed":
            const newState={...state};
            newState.selectedConversation=newState.conversations.find(
                conversation=>conversation.id===action.payload
            );
            return newState;
        case "new_message_added":
            if(state.selectedConversation){
                const newState2={...state};
                newState2.selectedConversation={...newState2.selectedConversation};
                newState2.selectedConversation.messages.push({
                    imageUrl:null,
                    content:action.payload.text,
                    timestamp: action.payload.time,
                    isMyMessage:false
                });
                return newState2;
            }
            return state;
        case "receive_message":
            if(state.selectedConversation){
                const newState2={...state};
                newState2.selectedConversation={...newState2.selectedConversation};
                newState2.selectedConversation.messages.push({
                    imageUrl:require("../../images/profiles/sarah.jpeg"),
                    content:action.payload,
                    timestamp: new Date().getTime(),
                    isMyMessage:true
                });
                return newState2;
            }
            return state;
        case "add_image":
            if(state.selectedConversation){
                const newState3={...state};
                newState3.selectedConversation={...newState3.selectedConversation};
                newState3.selectedConversation.messages.push({
                    imageUrl:null,
                    content:null,
                    timestamp: new Date().getTime(),
                    isMyMessage:false,
                    photo:action.payload
                });
                return newState3;
            }
            return state;
        default:
            return state
    }
};
