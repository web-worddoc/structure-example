import { useEffect } from 'react';


type Handler = (event: { target: any }) => void;

export const useOnClickOutside = (ref: React.RefObject<any>, handler: Handler) => {
    useEffect(
        () => {
            const listener = (event: { target: any }) => {
                if (!ref.current || ref.current.contains(event.target))
                return;

                handler(event);
            };

            document.addEventListener('click', listener);

            return () => {
                document.removeEventListener('click', listener);
            };
        },
        [ref, handler]
    );
}
