const shipFactory = (length) => {
    const health = Array(length).fill(1);
    const hit = place => {
        health[place] = 0;
    }
    const isSunk = () => {
        return health.reduce((a, b) => a + b, 0) === 0;
    }
    return {
        health,
        hit,
        isSunk
    };
};

export { shipFactory };