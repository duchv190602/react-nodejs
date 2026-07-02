import userService from "../service/userService";

const hanldeHelloWorld = (req, res) => {
  return res.render("home.ejs");
}
const handleUserPage = async (req, res) => {
  let usersList = await userService.getUserList();
  return res.render("user.ejs", {usersList });
}
const handleCreateNewUser =  (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username; 
  userService.createNewUser(email, password, username);
  return res.send("Create new user succeed!");
}
export default {
  hanldeHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};