// TODO 8 - Fetch lottery contract storage

// KT1Mbcm3s69ThWmHf9fxEVtNfV1iLad2CMzR : Health register contract deployed on jakarta testnet

// KT1QVntDsrg2DgrCvDEmYmty5cCh8W8H9vmd : Latest Health Register containing 7 fields of input

// KT1CzSerSLpKV4FR7gjNFMoKk95qTYpJgc5z : Login contract deployed on jakartanet

import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1QVntDsrg2DgrCvDEmYmty5cCh8W8H9vmd/storage"
  );
  return res.data;
};

export const fetchStorage1 = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1CzSerSLpKV4FR7gjNFMoKk95qTYpJgc5z/storage"
  );
  return res.data;
};
