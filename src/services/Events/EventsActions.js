import { createActions } from 'redux-actions';

export const eventsActions = createActions({
    GET_EVENTS: () => ({ }),
    GET_EVENTS_RESPONSE: (events) => ({events }),
    CREATE_PUBLIC: (event) => ({event }),  
    CREATE_PUBLIC_RESPONSE: (event) => ({event}),
    REGISTER_EVENT: (data) => ({ data }),
    REGISTER_EVENT_RESPONSE: (participants) => ({ participants}),
    CONTACT_FORM: (data) => ({data }),  
    CONTACT_FORM_RESPONSE: (data) => ({data}),
    
})