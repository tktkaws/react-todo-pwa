import React, { useContext, useState }from "react";
import dig from "object-dig"
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  // もしログインしていたら
  const buttonRender = () => {
    let buttonDom
    if( dig(currentUser, 'currentUser') ){
    // if( currentUser.currentUser ){
      // ↑は中身が存在しません！というエラーになってしまいます
      // currentUser.currentUser.Im.〇〇
      buttonDom = <button onClick={logOut}>ログアウト</button>
    // もしログインしていなかったら
    }else{
      buttonDom = <button onClick={signInWithGoogle}>ログイン</button>
    }
    return buttonDom
  }
  return(
    <header>
      ヘッダー
      {buttonRender()}
    </header>
  )
}
export default Header;
