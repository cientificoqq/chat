import Chat from "./Chat";
import Login from "./Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./util/const";

export const publicRoutes = [{
    path: LOGIN_ROUTE,
    Component: Login, // Назва з великої літери — для JSX
}, ];

export const privateRoutes = [{
    path: CHAT_ROUTE,
    Component: Chat,
}, ];