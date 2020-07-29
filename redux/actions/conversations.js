

export const conversationChanged=id=>{
    return {type:"selected_conversation_changed",payload:id}
};
export const newMessageAdded=(text,time)=>{
    return {type:"new_message_added",payload:{text,time}}
};

export const addImage=uri=>{
    return {type:"add_image",payload:uri}
};

export const receiveMsg=(msg)=>{
    return {type:"receive_message",payload:msg}
};
