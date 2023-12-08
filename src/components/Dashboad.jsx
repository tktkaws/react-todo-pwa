import React, {useState, useEffect, useContext} from "react";
// import * as Api from "../service/api"
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig"
import { AuthContext } from "../providers/AuthProvider";

const Dashboad = () => {
    const currentUser = useContext(AuthContext);
    const [inputName, setInputName] = useState("");
    console.log(inputName);
    const formRender = () => {
      let dom
      // もしログインしていたら、TODOの入力フォーム
      if( dig(currentUser, 'currentUser', 'uid') ){
        dom = <form>
          <input placeholder="ToDoName" value={inputName} onChange={(event) => setInputName(event.currentTarget.value)}/>
          <button type="button" onClick={() => post()} >追加</button>
        </form>
      }else{
      // もしログインしていない場合は、ログインボタン
        dom = <button onClick={signInWithGoogle}>ログイン</button>
      }
      return dom
    }

    // const post = () => {
    //   Api.addTodo(inputName, currentUser.currentUser.uid);
    //   setInputName("");
    // }

    return(
      <div>
        {formRender()}
      </div>
    )
  };
  export default Dashboad;
