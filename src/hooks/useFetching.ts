import { useState } from "react";

export const useFetching = (callback: () => void) => {
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

    // @ts-ignore
    const fetching = async (...args): void => {
        try {
            // @ts-ignore
            await callback(...args);
        } catch (error) {
            console.log(error)
            // @ts-ignore
            setErrorMessage(error.message);
        } finally {
            setIsFetching(false);
        }
    }

    return [fetching, isFetching, errorMessage]
};

