export function saveToLocalStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data) as T;
    }
    return null;
}
