const today = new Date();
const currentHour = today.getHours ();
let message = "Hello";

//If it is morning: Show "Good Morning" messaage
if (currentHour <= 12) {
    message = "Good morning!";
} else if (currentHour > 12 && currentHour <= 17) {
    message = "Good afternoon!";
//If it is mid day: Show "Hello" message
} else if (currentHour > 17) {
    message = "Good evening!";
//If it is evening: Show "Good Evening" message
}

const handleClick = () => {
    alert(message);
}