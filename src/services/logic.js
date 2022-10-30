let date = new Date();

export function currentDate(){
    return date.toLocaleDateString();
}

export function currentTime(){
    return date.toLocaleTimeString();
}

