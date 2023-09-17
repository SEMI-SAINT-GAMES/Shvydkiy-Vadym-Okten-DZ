

export const TruncatedText = ({ text, maxLength }: { text: string; maxLength: number }) => {
  if (text.length <= maxLength) {
    return <h2>{text}</h2>;
  } else {
    const truncatedText = text.slice(0, maxLength) + '...';
    return <h2>{truncatedText}</h2>;
  }
};