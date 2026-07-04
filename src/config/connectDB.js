const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("learn_nodejs", "root", "root", {
  host: "localhost",
  dialect: "mysql"
});

const connection = async () => {
try{
    await sequelize.authenticate();
    console.log("Connect database successfully");
}catch(error){
    console.log("Connect database failed: ", error);
}
}
export default connection;