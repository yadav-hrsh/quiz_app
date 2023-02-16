import React from 'react'
import './styles/Main.css'
import ReactDOM from 'react-dom/client'
import App from './Components/App'

import store from './redux/store'
import { Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(    

    <Provider store={store}>
        <App />
    </Provider>
)
