import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from './Routes/index';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* cach 1  */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {/* cach 2 */}
                    {/* <Route path="/" element={<Home />}></Route>
                    <Route path="/following" element={<Following />}></Route> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
