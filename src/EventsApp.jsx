import { AuthProvider } from "./auth/contexts/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const EventsApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
