import { format } from "date-fns";
export const DateTimeHelper = {
  convertToLocalTime: (timeString: string, locale = "en") => {
    const date = new Date(timeString);
    if (!isNaN(date.getTime())) {
      const formattedTime = format(date, "hh:mm a");
      return formattedTime;
    }

    return timeString;
  },

  convertDateToShortFormat: (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);

    if (
      date.getFullYear() == now.getFullYear() &&
      date.getMonth() == now.getMonth() &&
      date.getDay() == now.getDay()
    ) {
      return "Today";
    }
    const formattedDate = format(date, "eee");
    return formattedDate;
  },
};
