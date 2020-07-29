
const WebSocket=require("ws");

const wss=new WebSocket.Server({host:"192.168.56.1",port:8080},()=>{
    console.log("Server started...");
});

let ws;

let clients={};

wss.on("connection",(server)=>{
    ws=server;
    const client=ws.upgradeReq.headers["sec-websocket-key"];
    clients[client]=ws;
    ws.on('message', (msg, data) => receive(msg, data, client));
    ws.on('close', (socket, number, reason) =>
        console.log('Closed: ', client, socket, number, reason),
    );
});


const receive =(msg,data,sender)=>{
    console.log(`Received: ${msg.substring(0,500)},from ${sender}`)
    broadcast(msg,sender)
};

const broadcast=(msg,sender)=>{
    msg = JSON.parse(msg);
    Object.keys(clients).map((client) => {
        if (client === sender) {
            return;
        } else if (msg.image !== undefined) {
            msg.text = undefined;
            msg.timestamp = new Date().getTime();
            send(msg, client);
        } else {
            send(msg, client);
        }
    });

};
const send=(msg,client)=>{
    console.log("Sending",msg);
    clients[client].send(JSON.stringify(msg),(error)=>{
        if (error) {
            delete  clients[client];
        } else{
            console.log(`Sent :${msg},to ${client}`)
        }
    });
};
