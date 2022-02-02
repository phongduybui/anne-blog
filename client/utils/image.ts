export const getImagePath = (path?: string) => {
  if (!path) return '/images/placeholder.png';
  return `http://168.138.168.68${path}`;
};
