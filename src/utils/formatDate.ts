const formatDate = (value: Date): string => {
  const dateConvert = new Date(value);
  return `${dateConvert.toLocaleDateString()} - ${dateConvert.toLocaleTimeString()}`;
};

export default formatDate;
