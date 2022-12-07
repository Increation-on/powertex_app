import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
    let index = 0;

    return (
        <Routes>
            {routes.map(el => {
                return <Route key={index++} path={el.path} element={<el.component />}/>
            })}
        </Routes>
    )
}

export default AppRouter
