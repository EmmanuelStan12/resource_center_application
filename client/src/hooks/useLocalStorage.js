import { useState } from "react";

const useLocalStorage = () => {
    const get = (key) => {
        return localStorage.getItem(key)
    }

    const set = (key, value) => {
        localStorage.setItem(key, value)
    }

    return [get, set];
}

export default useLocalStorage;