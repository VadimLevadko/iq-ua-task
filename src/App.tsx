import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";

import store from './features/store.ts'
import Layout from './app/layout.tsx'

const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(
    <Provider store={store}>
        <Layout />
    </Provider>
)