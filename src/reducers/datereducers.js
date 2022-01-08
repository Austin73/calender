export function datereducers(state = {

    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()

}, action) {

    switch (action.type) {
        case "CHANGE_DATE":
            return { ...state, date: action.payload }

        case "CHANGE_MONTH":
            return { ...state, month: action.payload }
        case "CHANGE_YEAR":
            return { ...state, year: action.payload }
        case "INCREMENT_MONTH":
            let nextmonth = state.month
            if (nextmonth >= 12)
                nextmonth = 1
            else
                nextmonth += 1
            console.log(nextmonth)
            return { ...state, month: nextmonth }
        case "DECREMENT_MONTH":
            let prevmonth = state.month

            if (prevmonth <= 1)
                prevmonth = 12
            else
                prevmonth -= 1
            console.log(prevmonth)
            return { ...state, month: prevmonth }
        case "INCREMENT_YEAR":
            let nextyear = state.year
            return { ...state, year: nextyear + 1 }
        case "DECREMENT_YEAR":
            let prevyear = state.year
            return { ...state, year: prevyear - 1 }
        default:
            return state
    }
}