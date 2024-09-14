import { useEffect, useRef, useState } from 'react';

function BlurredText({ children }) {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (observer && textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <p
      ref={textRef}
      className={`transition duration-[1.5s] delay-[1s] text-paragraph font-Urbanist ease-in ${
        isInView ? 'filter-none' : 'filter blur-sm'
      }`}>
      {children}
    </p>
  );
}

export default BlurredText;
