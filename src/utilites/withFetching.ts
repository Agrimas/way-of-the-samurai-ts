export function withFetching(
    asyncFunction: () => Promise<void>,
    setFetching: (isFetching: boolean) => void,
) {
    setFetching(true);
    asyncFunction().then(() => {
        setFetching(false);
    })
}