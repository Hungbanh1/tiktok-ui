//public routes
import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: config.routes.home, component: Home },

    { path: config.routes.following, component: Following },
    // { path: '/profile', component: Profile },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: null },
    { path: config.routes.search, component: Upload, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
