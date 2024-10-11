import React, { useEffect, useState, useRef } from 'react';

const TypewriterEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const textRef = useRef(null);
    const hasStarted = useRef(false); // Track if the effect has started

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasStarted.current) { // Check if already started
                    hasStarted.current = true; // Set to true to prevent re-triggering
                    startTypewriter();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    const startTypewriter = () => {
        const parts = text.split(' <br /> '); // Split text on <br />
        let index = 0;
        
        const typeNextPart = (part) => {
            let charIndex = 0;
            const intervalId = setInterval(() => {
                if (charIndex < part.length) {
                    setDisplayedText((prev) => prev + part.charAt(charIndex));
                    charIndex++;
                } else {
                    clearInterval(intervalId);
                    if (index < parts.length - 1) {
                        index++;
                        setDisplayedText((prev) => prev + '\n'); // Add line break in state
                        typeNextPart(parts[index]); // Start typing next part
                    }
                }
            }, speed);
        };

        typeNextPart(parts[index]); // Start typing the first part
    };

    return (
        <span ref={textRef}>
            {displayedText.split('\n').map((line, idx) => (
                <span key={idx}>
                    {line}
                    {idx < displayedText.split('\n').length - 1 && <br />} {/* Insert <br /> for line breaks */}
                </span>
            ))}
            <span className="cursor"></span> {/* Optional blinking cursor */}
        </span>
    );
};

export default TypewriterEffect;
