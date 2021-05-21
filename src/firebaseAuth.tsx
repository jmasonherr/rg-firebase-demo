import { Redirect, Route, RouteProps } from "react-router-dom";

import { createContext, ReactNode, useContext } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebaseSetup'


export const LOGIN_ROUTE = "/login";

type Session = {
    user?: firebase.User;
    loading: boolean;
};
export const SessionContext = createContext<Session>({ loading: true });

export const useSession = () => {
    return useContext(SessionContext);
};

type SessionProviderProps = {
    children: ReactNode;
};

export const SessionProvider = ({ children }: SessionProviderProps) => {
    const [user, loading] = useAuthState(auth);

    if (loading) return null;
    // Can't be null
    const usr = user ?? undefined

    return (
        <SessionContext.Provider value={{ user: usr, loading }}>
            {children}
        </SessionContext.Provider>
    );
};

type Props = RouteProps;

export default function PrivateRoute({ location, ...props }: Props) {
    const { user } = useSession();

    return user?.emailVerified ? (
        <Route {...props} location={location} />
    ) : (
        <Redirect
            to={{
                pathname: LOGIN_ROUTE,
                state: { from: location },
            }}
        />
    );
}