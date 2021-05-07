import { useGo } from ".";

export const useProtectedPage = () => {
  const go = useGo();
  if (!localStorage.getItem("token")) {
    go.login();
  }
};
