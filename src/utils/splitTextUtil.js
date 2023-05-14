const splitText = (text) => {
  const paragraphs = text.split('\n');
  if (text !== '') {
    const [firstParagraph, ...otherText] = paragraphs;
    return { firstParagraph, otherText };
  }
  const newNote = 'New Note';
  return { firstParagraph: newNote };
};

export default splitText