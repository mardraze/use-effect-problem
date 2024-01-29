const sharedCounter = {
    value: 0
}

export function useSharedCounter() {
    return sharedCounter;
}
