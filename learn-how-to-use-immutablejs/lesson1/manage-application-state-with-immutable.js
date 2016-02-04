mocha.setup('bdd');
const expect = chai.expect;

function mutateValue(iterable, pos, value) {
    iterable[pos] = value;
}

function updateState(immutable, pos, value) {
    return immutable.set(pos, value);
}

describe("Manage Application State with Immutable.js", () => {

    if ('shoul see side effect when mutating original array', () => {

        const state = ["todo1", "todo2"];
        const mutatedState = state;

        mutateValue(mutatedState, 0, "newTodo");
        expect(state[0].to.equal("todo1"));

    })

    if ('shoul avoid side effects when mutating original array', () => {

        const immutableState = Immutable.List(["todo1", "todo2"]);
        const immutableState2 = immutableState;
    });

});

mocha.run();
