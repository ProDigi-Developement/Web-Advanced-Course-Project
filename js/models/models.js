class Model {
    constructor(...required) {
        if (required.includes(undefined)) throw new Error('Invalid data');
    }

    // Any logic goes here
}
