export const FormatView = (views: string): string => {
  if (Number(views) >= 1000000) return `${(Number(views) / 1000000).toFixed(1)}M`;
  else if (Number(views) >= 100000) return `${Math.floor(Number(views) / 1000)}k`;
  else if (Number(views) >= 1000) return `${(Number(views) / 1000).toFixed(1)}k`;
  else return views;
};
