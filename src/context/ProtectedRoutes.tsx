import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactNode, useEffect, useState } from "react";
import AuthServices from "@services/Auth";

type ProtectedRoutesTypes = {
  children: ReactNode;
  redirectPath?: string;
};

const ProtectedRoutes: FC<ProtectedRoutesTypes> = ({
  children,
  redirectPath = "/",
}) => {
  const Location = useLocation();

  const authenticated = AuthServices.getUserName();

  if (!authenticated) {
    return <Navigate to={redirectPath} state={{ from: Location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
