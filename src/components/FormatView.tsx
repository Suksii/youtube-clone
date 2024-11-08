type viewsType = number;

export const FormatView = (views: viewsType): string => {
  if (views >= 1000000)
    return `${Math.floor(views / 1000000)}M ${Math.floor(
      (views % 1000000) / 1000
    )}k`;
  else if (views >= 1000) return `${Math.floor(views / 1000)}k`;
  else return views.toString();
};
