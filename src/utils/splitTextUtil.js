const splitText = (text) => {
  const trimmedText = text.trim();
  if (trimmedText.length > 0) {
    const paragraphs = text.split('\n');
    const [firstParagraph, ...otherText] = paragraphs;
    return { firstParagraph, otherText };
  }
  const newNote = 'New Note';
  return { firstParagraph: newNote };
};

export default splitText