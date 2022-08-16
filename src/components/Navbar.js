import { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
// import { ReactDOM } from "react-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import Transactions from "./transaction";
// to check fixed error

const Navbar = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  // TODO 4.a - Create onConnectWallet function
  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    
    <div className="navbar navbar-dark bg-dark fixed-top sticky-nav">
      {/* <BrowserRouter>
      <Routes>
          <Route path="transaction" element={<Transactions />} />
      </Routes>
    </BrowserRouter> */}
      <div className="container py-2">
        
        <a href="/" className="navbar-brand">
          HEALTH REGISTER
        </a>
        <ul class="nav">
            {/* <li><a href="#home">Home</a></li> */}
            <li><a href="https://better-call.dev/jakartanet/KT1QVntDsrg2DgrCvDEmYmty5cCh8W8H9vmd/storage">Transactions</a></li>

            {/* <li>
            <Link to="/transaction">
              Transactions
            </Link>
            </li> */}

            <li><a href="https://gitopia.com/gitopia142lyeep80uz7jlu6f85y960938g24rnuf73uyf/Decentralized-Health-Record-Database">Gitopia Repo</a></li>
            <li><a href="https://github.com/pps-19012/Decentralized-Health-Record-Database">GitHub Repo</a></li>
        </ul>
        
        <div className="d-flex">
          {/* TODO 4.b - Call connectWallet function onClick  */}
          <button onClick={onConnectWallet} className="btn btn-outline-info">
            {/* TODO 5.a - Show account address if wallet is connected */}
            {account ? account : "Connect Wallet"}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
