export default function(state = null, action) {
    switch(action.type) {
        case 'TEXT':
            console.log("Hi");
            return action.payload;
    }

    return state;
}