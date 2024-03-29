export const saveToLocalStorage = state => {
    try {
        const serializedState = state;
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log('Could not save state');
    }
};

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    } catch (e) {
        return undefined;
    }
};