import React, { FC, createContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { injected } from "../connectors";
import { app } from "../config/firebase";
import { getDatabase, set, ref, onValue } from "firebase/database";

const initialState = {
  account: "",
  role: "",
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(initialState);

const AuthProvider: FC<any> = ({ children }: any) => {
  const navigate = useNavigate();
  const { account, activate, deactivate } = useWeb3React();
  const [user, setUser] = React.useState({
    account: "",
    role: "",
  });

  const login = async () => {
    loadUser();
    navigate("/home");
  };

  const loadUser = async () => {
    const database = getDatabase(app);
    if (account) {
      const userRef = ref(database, "users/" + account);
      onValue(userRef, async (snapshot) => {
        const data = await snapshot.val();

        if (!data) {
          set(userRef, {
            account,
            role: "user",
          })
            .then(() => {
              setUser({ account, role: "user" });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setUser(data);
        }
      });
    } else {
      await activateWeb3();
    }
  };

  const logout = async () => {
    navigate("/");
  };

  const isMetamaskInstalled = () => {
    if (typeof (window as any)?.ethereum) {
      return true;
    }

    return false;
  };

  const activateWeb3 = async () => {
    if (!isMetamaskInstalled()) {
      toast.error(`Please install Metamask!`);
      return;
    } else {
      await activate(injected);
    }
  };

  React.useEffect(() => {
    if (!account) {
      activateWeb3();
    } else if (!user?.account) {
      loadUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  // React.useEffect(() => {
  //   if (!user?.account) {
  //     console.log("over here");
  //     loadUser();
  //   }
  // }, [user]);
  return (
    <AuthContext.Provider
      value={{
        ...user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
