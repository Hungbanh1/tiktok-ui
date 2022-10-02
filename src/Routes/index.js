//public routes
import routesConfig from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: routesConfig.home, component: Home },

    { path: routesConfig.following, component: Following },
    // { path: '/profile', component: Profile },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: null },
    { path: routesConfig.search, component: Upload, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
