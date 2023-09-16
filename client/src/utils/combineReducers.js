export default function combineReducers (...args) {
    const initialState = typeof args[0] !== 'function' && args.shift();
    const reducers = args;

    if (typeof initialState === 'undefined') {
        throw new TypeError('The initial state may not be undefined use null instead');
    }

    
  return (prevState, value, ...args) => {
    const prevStateIsUndefined = typeof prevState === 'undefined';
    const valueIsUndefined = typeof value === 'undefined';

    if (prevStateIsUndefined && valueIsUndefined && initialState) {
      return initialState;
    }

    return reducers.reduce((newState, reducer, index) => {
      if (typeof reducer === 'undefined') {
        throw new TypeError(
          `An undefined reducer was passed in at index ${index}`
        );
      }

      return reducer(newState, value, ...args);
    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
  };
};