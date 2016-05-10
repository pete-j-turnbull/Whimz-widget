export default function toggleState(state = 'COLLAPSED', action) {
    switch (action.type) {
        case 'TOGGLE_WIDGET':
            return state === 'EXPANDED' ? 'COLLAPSED' : 'EXPANDED';
        default:
            return state;
    }
}
