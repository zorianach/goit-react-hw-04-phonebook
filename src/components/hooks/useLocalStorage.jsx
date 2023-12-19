import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {

    const [contact, setContact] = useState(() => {
        return JSON.parse(localStorage.getItem(key) ?? defaultValue);
      });

useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contact));
}, [contact, key]);
return [contact, setContact]
}

export default useLocalStorage;