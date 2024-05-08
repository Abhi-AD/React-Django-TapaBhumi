

const month = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec"
   ];

   const week = [
     "Sun",
     "Mon",
     "Tue",
     "Wed",
     "Thu",
     "Fri",
     "Sat"
   ];
   
   
export const dateFormate = (date) =>{
     const currentDate = new Date(date);
     const year = currentDate.getFullYear();
     const monthIndex = currentDate.getMonth(); // Get month index (0-11)
     const dayOfWeekIndex = currentDate.getDay(); // Get day of week index (0-6)
     const dayOfMonth = currentDate.getDate()
     const formattedDate = `${week[dayOfWeekIndex]} ${month[monthIndex]}-${dayOfMonth}, ${year}`;
  
  return formattedDate;
}