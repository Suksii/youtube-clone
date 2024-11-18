export const FormatDuration = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const hoursFormatted = hours > 0 ? `${hours}:` : "";
  const minutesFormatted =
    hours > 0 ? String(minutes).padStart(2, "0") : minutes.toString();
  const secondsFormatted = String(seconds).padStart(2, "0");

  return `${hoursFormatted}${minutesFormatted}:${secondsFormatted}`;
};
