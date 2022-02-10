import moment from 'moment';

export const getReadingTime = (title: string, content: string) => {
  const wordCount = title?.length + content?.length;
  return `${(wordCount / 200).toFixed()} min`;
};

export const formatTime = (time: string) => {
  return moment(time).format('LL');
};
