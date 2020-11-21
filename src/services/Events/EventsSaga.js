import { put, takeLatest, all } from 'redux-saga/effects';
import { eventsActions } from "./EventsActions";
import Api from '../../assets/common/Api/Api';
import { message } from 'antd';
import { push } from 'connected-react-router';

function* registerEvent({ payload: data }) {
  console.log('employee data', data)
  const { id, event } = data.data;
  const employees=[id]
  const params = {
    employees, event
  }
  try {
    console.log(data.data, 'params')
    const response = yield Api.post('event/register-employee-event', params)
    if (response.status === 201) {
      yield put(eventsActions.registerEventResponse())
      message.success('Empleados  registrado en evento!');
      yield put(push('/'))

    } else {
      const err = new TypeError('ERROR_LOGIN')
      yield put(eventsActions.registerEventResponse(err))
      message.error('Error al registrar');
    }
  } catch (error) {
    console.log(error)
    message.error('Error al registrar al evento');
  }
}


 function* createPublic({ payload: data }) {
  const { eventid,document,phone,names,email, } = data.event;
  const event = parseInt(eventid)
  const params= {
    document,names,phone,email
  }
  try {
    console.log(data.event, 'params')
    const response = yield Api.post('employee/create-public', params)
    console.log(response, '_resp');
    if (response.status === 201) {
      yield put(eventsActions.createPublicResponse())
      let id=response.payload.id
      const params2 = {
        id,event
      }
      yield put(eventsActions.registerEvent(params2))
    } else {
      const err = new TypeError('ERROR_LOGIN')
      yield put(eventsActions.createPublicResponse(err))
      message.error('Error al registrase en el evento');
    }
  } catch (error) {
    console.log(error)
    message.error('Error al crear al evento');
  }
}
 


function* getEvents() {
  const response = yield Api.get("event/all");
  console.log(response, '_resp')
  if (response.status === 200) {
    yield put(eventsActions.getEventsResponse(response.payload.events));
  } else {
    const err = new TypeError("Error GetCities");
    yield put(eventsActions.getEventsResponse(err));
  }
}


function* contactForm({ payload: data }) {
  const { email,names,asunto,message } = data.data;
  const params= {
    email,names,asunto,message
  }
  try {
    console.log(data.event, 'params')
    const response = yield Api.post('utils/contact', params)
    console.log(response, '_resp'); 
    if (response.status === 201) {
      yield put(eventsActions.contactFormResponse(data))
      alert('Tiquete enviado');
    } else {
      const err = new TypeError('ERROR_LOGIN')
      yield put(eventsActions.contactFormResponse(err))
      alert('Error al enviar el tiquete');
    }
  } catch (error) {
    console.log(error)
    alert('Error al crear al evento');
  }
}

function* ActionWatcher() {
  yield takeLatest(eventsActions.getEvents, getEvents);
  yield takeLatest(eventsActions.createPublic, createPublic);
  yield takeLatest(eventsActions.registerEvent, registerEvent);
  yield takeLatest(eventsActions.contactForm, contactForm);


 }


export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
