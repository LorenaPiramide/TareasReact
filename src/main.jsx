import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login.jsx'
import Registro from './components/Registro.jsx'
import TareasList from './components/TareasList.jsx'
import Bienvenida from './components/Bienvenida.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Bienvenida />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/tareas' element={<TareasList />} />
      </Route>

    </Routes>
  </BrowserRouter>
)
