function formatDuration (sec) {
   const YEAR = 31536000;
   let years = Math.floor(sec/31536000);
   let days = Math.floor(sec/(24*3600))%365;
   let hours = Math.floor((sec/60)%60);
   let minutes = Math.floor(sec/60)%60;
   let seconds = sec % 60;
   const forReturn = ['year', 'day', 'hour', 'minute', 'second'];
   return `${years ? years : ''}, ${days ? days : ''}, ${hours ? hours : ''}, ${minutes} and ${seconds}`
 }
 console.log(formatDuration(3662))