import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore(initialState: any) {
	const store = createStore(
		reducer,
		initialState
	);
	return store;
}
