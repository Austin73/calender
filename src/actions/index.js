export function change_date (date){
    return{
        type : 'CHANGE_DATE',
        payload:date
    }
}

export function change_month (month){
    return{
        type : 'CHANGE_MONTH',
        payload:month
    }
}
export function change_year (year){
    return{
        type : 'CHANGE_YEAR',
        payload:year
    }
}

export function increment_month(){
    return{
        type:"INCREMENT_MONTH"
    }
}
export function decrement_month(){
    return{
        type:"DECREMENT_MONTH"
    }
}
export function increment_year(){
    return{
        type:"INCREMENT_YEAR"
    }
}
export function decrement_year(){
    return{
        type:"DECREMENT_YEAR"
    }
}

export function add_event_name(event_name){
    return {
        type:"ADD_EVENT_NAME",
        payload:event_name
    }
}
export function add_event_detail(event_detail){
    return {
        type:"ADD_EVENT_DETAIL",
        payload:event_detail
    }
}

export function  add_event_date(eventdate)
{
    return{
        type:"ADD_EVENT_DATE",
        payload:eventdate
    }
}
export function  add_event_month(eventmonth)
{
    return{
        type:"ADD_EVENT_MONTH",
        payload:eventmonth
    }
}
export function  add_event_year(eventyear)
{
    return{
        type:"ADD_EVENT_YEAR",
        payload:eventyear
    }
}
export function  add_event(event)
{
    return{
        type:"ADD_EVENT",
        payload:event
    }
}