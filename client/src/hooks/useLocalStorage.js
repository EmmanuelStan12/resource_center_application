import { useState } from "react";

const useLocalStorage = () => {
    const get = (key) => {
        return localStorage.getItem(key)
    }

    const set = (key, value) => {
        localStorage.setItem(key, value)
    }

    const clear = () => {
        localStorage.clear()
    }

    return {get, set, clear};
}

export default useLocalStorage;