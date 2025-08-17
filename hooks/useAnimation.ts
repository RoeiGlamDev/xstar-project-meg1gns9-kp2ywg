import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations within the CleanSSR website.
 * This hook provides functionalities to animate elements on the page,
 * enhancing the user experience for the CleanSSR technology cleaning service.
 *
 * @returns {Object} - An object containing animation controls and state.
 */
const useAnimation = () => {
    const elementRef = useRef<HTMLElement | null>(null);
    const isVisible = useRef<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const { top } = elementRef.current.getBoundingClientRect();
                if (top < window.innerHeight && !isVisible.current) {
                    isVisible.current = true;
                    elementRef.current.classList.add('fade-in');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const setRef = (node: HTMLElement) => {
        if (node) {
            elementRef.current = node;
        }
    };

    return {
        setRef,
    };
};

export default useAnimation;