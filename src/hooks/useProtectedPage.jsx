import useGo from "hooks/useGo";

const useProtectedPage = () => {
  const go = useGo();
  if (!localStorage.getItem("token")) {
    go.login();
  }
};

export default useProtectedPage;
