import userService from "../service/userService";

const hanldeHelloWorld = (req, res) => {
  return res.render("home.ejs");
}
const handleUserPage = async (req, res) => {
  let usersList = await userService.getUserList();
  return res.render("user.ejs", {usersList });
}
const handleCreateNewUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username; 
  await userService.createNewUser(email, password, username);
  return res.redirect("/user");
}
const handleDeleteUser = async (req, res) => {
  let userId = req.params.userId;
    console.log("Check userId: ", userId);
  await userService.deleteUser(userId);
  console.log("Check userId: ", userId);
  return res.redirect("/user");
}
export default {
  hanldeHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};