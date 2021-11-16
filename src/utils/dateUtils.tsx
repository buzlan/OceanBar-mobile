export const formatDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const formatTime = (date) => {
  return `${date.getHours()}:${date.getMinutes()}`;
};
