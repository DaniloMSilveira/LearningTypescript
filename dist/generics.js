"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
// newState.setState(false)
// console.log(newState.getState())
newState.setState("foo");
console.log(newState.getState());
// newState.setState(123)
// console.log(newState.getState())
newState.setState("bla");
console.log(newState.getState());
