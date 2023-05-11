import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../connectors";

const Wallet: FC = ({ onClose }: any) => {
  const { account, activate, deactivate, error } = useWeb3React();
  const [isConnecting, setIsConnecting] = React.useState(false);

  const onclickConnect = async () => {
    setIsConnecting(true);

    try {
      await activate(injected);
      onClose();
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };

  const onclickWalletconnect = async () => {
    setIsConnecting(true);

    try {
      await activate(walletconnect);
    } catch (err) {
      console.error(err);
    }

    setIsConnecting(false);
  };

  const isMetamaskInstalled = () => {
    if (typeof (window as any)?.ethereum !== "undefined") {
      return true;
    }

    return false;
  };

  return (
    <div>
      <div>Connect Wallet</div>
      {!isMetamaskInstalled() ? (
        <div>
          In case you don’t have, you will need to set up a{" "}
          <a
            className="text-blue-400"
            href="https://metamask.io"
            target={"_blank"}
          >
            Metamask
          </a>{" "}
          wallet.
        </div>
      ) : account ? (
        <div>
          <Link to="/store">My Collections</Link>
        </div>
      ) : isConnecting ? (
        <div>
          <div>Connecting...</div>
        </div>
      ) : (
        <div>
          <div onClick={onclickConnect}>
            <div>Metamask</div>
            <img src="/images/metamask.png" />
          </div>
          <div onClick={onclickWalletconnect}>
            <div>Wallet Connect</div>
            <img src="/images/walletConnectIcon.svg" />
          </div>
        </div>
      )}

      {/* { error ? (
            <div className={styles.text, styles.footer}> 
                { ErrorMessages[ error.code ] ? ErrorMessages[ error.code ] : error.message }
            </div>
        ) : null } */}
    </div>
  );
};

export default Wallet;
