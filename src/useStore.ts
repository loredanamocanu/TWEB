import { createContext, useContext } from 'react';
import store from './store';

const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);