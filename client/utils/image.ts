export const getImagePath = (path?: string) => {
  if (!path) return '/images/placeholder.png';
  return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
};
