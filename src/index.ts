import {UserForm} from "./views/UserForm";
import {User} from "./models/User";
import {UserEdit} from "./views/UserEdit";

const user=User.buildUser({name:"Slex",age:22});
const root=document.querySelector('#root');
if(root){
    const userEdit=new UserEdit(root,user);
    userEdit.render()
    console.log(user)
}else {throw new Error('root is feeling bad today')}