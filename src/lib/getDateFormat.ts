export const getDateFormat = (date: string) => {
    const newdate = new Date(date);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  
    let month = months[newdate.getMonth()];
    let day = days[newdate.getDay()];
    let year = newdate.getFullYear();
    let modifyDate = newdate.getDate();
  
    return {
      day,
      month,
      year,
      modifyDate,
    };
  };
  