// Înlocuiește importurile existente din ReactDOM cu acestea:
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store';
import App from './App';
import {loadFromLocalStorage, saveToLocalStorage} from "./utils";

const dataInLocalStorage = loadFromLocalStorage('products');
if (!dataInLocalStorage) {
    saveToLocalStorage('products', store.products);
}


const rootElement = document.getElementById('root');

// Arată un loading înainte de a afișa App
ReactDOM.render(<div>Loading...</div>, rootElement);

// Așteaptă 2 secunde înainte de a afișa App cu datele din localStorage
setTimeout(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootElement
    );
}, 2000);
