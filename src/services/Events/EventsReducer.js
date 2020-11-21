import { handleActions } from 'redux-actions';
export const INITIAL_STATE = {
	loading: false,
	error: false,
	create: false,
	event: null,
	events: [],
	eventUser:null,
	update: false,
	participants: null
}
const eventsReducer = handleActions({
	CREATE_PUBLIC: (state, ) => ({ ...state, loading: true }),
	CREATE_PUBLIC_RESPONSE: {
		next(state, action) {
			return { ...state, loading: false }
		},
		throw(state, action) {
			return { ...state, error: true, loading: false }
		}
	},
	GET_EVENTS: (state, ) => ({ ...state, loading: true }),
	GET_EVENTS_RESPONSE: {
		next(state, action) {
			const { events } = action.payload;
			return { ...state, events, loading: false }
		},
		throw(state, action) {
			return { ...state, error: true, loading: false }
		}
	},
	REGISTER_EVENT: (state) => ({ ...state, loadingEmployee: true }),
	REGISTER_EVENT_RESPONSE: {
		next(state, action) {
			return { ...state, loadingEmployee: false };
		},
		throw(state, action) {
			return { ...state, errorEmployee: true, loadingEmployee: false };
		},
	},
	CONTACT_FORM: (state) => ({ ...state, loading: true }),
	CONTACT_FORM_RESPONSE: {
		next(state, action) {
			return { ...state, loading: false };
		},
		throw(state, action) {
			return { ...state, error: true, loading: false };
		},
	},
},

	INITIAL_STATE
);

export default eventsReducer;