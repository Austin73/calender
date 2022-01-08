
export function newEventReducer(state =
    {
        event_name: '',
        event_detail: '',
        event_date: 0,
        event_month: 0,
        event_year: 0
    }, action) {

    switch (action.type) {
        case "ADD_EVENT_NAME":

            return { ...state, event_name: action.payload }

        case "ADD_EVENT_DETAIL":
            return { ...state, event_detail: action.payload }
        case "ADD_EVENT_DATE":
            return { ...state, event_date: action.payload }
        case "ADD_EVENT_MONTH":
            return { ...state, event_month: action.payload }
        case "ADD_EVENT_YEAR":
            return { ...state, event_year: action.payload }
        default:
            return state
    }
}