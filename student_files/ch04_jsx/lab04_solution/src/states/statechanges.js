function changeResults(results) {
    return function update(prevState, props) {
        return { results };
    }
}

export { changeResults };