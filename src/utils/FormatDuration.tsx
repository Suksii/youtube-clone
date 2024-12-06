import moment from "moment";

// export const FormatDuration = (duration: number): string => {
//   const hours = Math.floor(duration / 3600);
//   const minutes = Math.floor((duration % 3600) / 60);
//   const seconds = duration % 60;

//   const hoursFormatted = hours > 0 ? `${hours}:` : "";
//   const minutesFormatted =
//     hours > 0 ? String(minutes).padStart(2, "0") : minutes.toString();
//   const secondsFormatted = String(seconds).padStart(2, "0");

//   return `${hoursFormatted}${minutesFormatted}:${secondsFormatted}`;
// };

// export const FormatDuration = (isoDuration: string): string => {
//   const duration: RegExpMatchArray | null = isoDuration.match(
//     /PT(\d+H)?(\d+M)?(\d+S)?/
//   );

//   if (!duration) {
//     throw new Error("Invalid ISO 8601 duration format");
//   }
//   const hours: number = duration[1] ? parseInt(duration[1]) : 0;
//   const minutes: number = duration[2] ? parseInt(duration[2]) : 0;
//   const seconds: number = duration[3] ? parseInt(duration[3]) : 0;

//   const formattedHours =
//     hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
//   const formattedMinutes = `${minutes.toString().padStart(2, "0")}`;
//   const formattedSeconds = `${seconds.toString().padStart(2, "0")}`;

//   return formattedHours + formattedMinutes + ":" + formattedSeconds;
// };

export const FormatDuration = (duration: string): string => {
  const seconds = moment.duration(duration).asSeconds();
  const convertedDuration = moment
    .utc(seconds * 1000)
    .format(seconds >= 3600 ? "HH:mm:ss" : "mm:ss");

  return convertedDuration;
};
