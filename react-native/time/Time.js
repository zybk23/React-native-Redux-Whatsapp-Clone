

export const formatTime=(timeStamp=>{
    const date=new Date(timeStamp);
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const hoursText=hours<10 ? `0${hours}`:hours;
    const minutesText=minutes<10 ? `0${minutes}`:minutes;
    return `${hoursText}:${minutesText}`
});
