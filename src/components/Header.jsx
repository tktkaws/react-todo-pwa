import React, { useContext, useState }from "react";
import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("header");
  console.log(currentUser);
  return(
    <header>
      ヘッダー
      <button onClick={signInWithGoogle}>ログイン</button>
    </header>
  )
}
export default Header;
