import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { CHAT_ROUTE } from "./util/const";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  console.log("user", user);

  const routesToRender = user ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {routesToRender.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {/* заміна Redirect to={CHAT_ROUTE} */}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
