import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userInfoModalInfo, setUserInfoModalInfo] = useState("");
  const [numberOfKids, setNumberOfKids] = useState(true);
  return (
    <ModalContext.Provider
      value={{
        userInfoModal: [userInfoModal, setUserInfoModal],
        userInfoModalInfo: [userInfoModalInfo, setUserInfoModalInfo],
        numberOfKids: [numberOfKids, setNumberOfKids],
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
