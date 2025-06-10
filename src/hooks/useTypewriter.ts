import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export function useTypewriter({
  words,
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterOptions) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text === currentWord) {
          setIsDeleting(true);
          setTimeout(() => {}, delayBetweenWords);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prevWordIndex) => {
            if (prevWordIndex === words.length - 1) {
              return loop ? 0 : prevWordIndex;
            }
            return prevWordIndex + 1;
          });
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, loop, typeSpeed, deleteSpeed, delayBetweenWords]);
  
  return text;
}