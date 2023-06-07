import React, { FC, createContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { injected } from "../connectors";
import { app } from "../config/firebase";
import { getDatabase, set, ref, onValue } from "firebase/database";
import Confirm from "../components/Confirm";

const initialState = {
  account: "",
  role: "",
  open: false,
  login: () => {},
  logout: () => {},
  handleOpen: () => {},
  handleClose: () => {}
};

export const AuthContext = createContext(initialState);

const AuthProvider: FC<any> = ({ children }: any) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { account, activate, deactivate } = useWeb3React();
  const [open, setOpen] =  React.useState(false);

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user, setUser] = React.useState({
    account: "",
    role: "",
  });

  const login = async () => {
    if (account) {
      await loadUser();
    } else {
      await activateWeb3();
    }
  };

  const loadUser = async () => {
    const database = getDatabase(app);
    if (account) {
      const userRef = ref(database, "users/" + account);
      onValue(userRef, async (snapshot) => {
        const data = await snapshot.val();
        if (data) {
          setUser(data);
          navigate('/home')
        } else {
          handleOpen()
        }

        // if (!data) {
        //   set(userRef, {
        //     account,
        //     role: "user",
        //   })
        //     .then(() => {
        //       setUser({ account, role: "user" });
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // } else {
        //   setUser(data);
        // }
        // navigate("/home");
      });
    } else {
      await activateWeb3();
    }
  };

  const logout = async () => {
    await deactivate()
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
    if (!account && pathname != '/') {
      navigate('/')
      return;
    } 
  }, [account])

  React.useEffect(() => {
    if (account && user?.role == "user" && pathname.includes('admin')) {
      navigate('/home')
      return
    }
  }, [pathname])

  return (
    <AuthContext.Provider
      value={{
        ...user,
        open,
        login,
        logout,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
