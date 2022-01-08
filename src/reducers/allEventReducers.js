
export function allEventReducers(state = [
        {
            id:1,
            event_name:'Attend Yoga Conclave',
            event_detail:'Organized by Ramdev Baba',
            event_date:15,
            event_month:12,
            event_year:2021
        }
    
], action) {

    switch (action.type) {
        case "ADD_EVENT":
              
            return [...state,{...action.payload , id: state.length+1}]

        default:
            return state
    }
}