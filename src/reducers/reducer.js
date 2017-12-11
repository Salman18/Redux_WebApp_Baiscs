export default function(state = null, action) {
    switch(action.type) {
        case 'Text':
            console.log("Hi");
            return action.payload;
    }

    return state;
}