import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utills/authHelper.js";
export const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    if (!name || !email || !password) {
      return res
        .status(404)
        .send({ success: false, messages: "All fields are required" });
    }
    // existing Users
    const isExist = await userModel.findOne({ email });
    console.log(isExist);
    if (isExist) {
      return res
        .status(200)
        .send({ success: true, message: "User Already Exist!" });
    }
    //
    const hashedPassword = await hashPassword(password);
    // Registration process
    const user = new userModel();
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    user.save();
    res
      .status(200)
      .send({ success: true, message: "Registration Successfull!" });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Registration Error", error });
  }
};

// Login Proccess
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, message: "All fields are required" });
    }
    const isLoginUser = await userModel.findOne({ email });
    if (!isLoginUser) {
      return res
        .status(404)
        .send({ success: false, message: "Username and password Invalid" });
    }
    const comparedPassword = await comparePassword(
      password,
      isLoginUser.password
    );
    if (!comparedPassword) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid Password!" });
    }

    res
      .status(200)
      .send({ success: true, message: "login success!", isLoginUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in Login" });
  }
};
