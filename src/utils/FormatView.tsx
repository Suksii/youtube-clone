export const FormatView = (views: number): string => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  else if (views >= 100000) return `${Math.floor(views / 1000)}k`;
  else if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
  else return views.toString();
};
