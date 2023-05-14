export const filterListBySearch = (list, text) => {
  return text.trim() === ''
    ? list
    : list.filter((note) => note.text.toLowerCase().includes(text));
};