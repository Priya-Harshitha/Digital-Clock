function clock(){
   let now = new Date();
   let hours = now.getHours();
   let mins = now.getMinutes().toString().padStart(2,0);
   let secs = now.getSeconds().toString().padStart(2,0);
   let meridian = hours > 12? "PM":"AM";
   hours = hours%12 || 12;
   hours = hours.toString().padStart(2,0);
   let display = document.getElementById('display');
   display.textContent = `${hours}:${mins}:${secs} ${meridian}`;
}
clock();
setInterval(clock,1000);