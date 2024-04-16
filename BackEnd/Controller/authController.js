
import AdminModels from "../Models/AdminModels.js";
import UserModels from "../Models/UserModels.js";
import { comparePassowrd, encryptConfirmPassword, encryptPassword } from "../Utils/authHandler.js";
import JWT from "jsonwebtoken";


// Signup
export const signupController = async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;
    // validation
    if (!name) {
      return res.send({
        msg: "Name is required..."
      })
    }
    if (!email) {
      return res.send({
        msg: "email is required..."
      })
    }
    if (!phone) {
      return res.send({
        msg: "phone is required..."
      })
    }
    if (!password) {
      return res.send({
        msg: "password must containe 8 character"
      })
    }
    if (!confirmPassword) {
      return res.send({
        msg: "confirmPassowrd must be match"
      })
    }

    const existingEmail = await UserModels.findOne({ email })
    const existingPhone = await UserModels.findOne({ phone })
    if (existingEmail) {
      res.status(200).send({
        success: false,
        msg: "Email Already Registered"
      })
    }
    else if (existingPhone) {
      res.status(200).send({
        success: false,
        msg: 'phone number already registered'
      })
    }

    // encrypting password
    const encryptedPassword = await encryptPassword(password);
    const encryptedConfirmPassword = await encryptConfirmPassword(confirmPassword)

    // inserting user Details in database
    const user = await new UserModels({ name, email, phone, password: encryptedPassword, confirmPassword: encryptedConfirmPassword }).save();
    res.status(201).send({
      success: true,
      msg: "user Register Successfully...",
      user
    })


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: 'error in signup',
      error
    })
  }
}



// Login
// --------->POST
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(email, password)
    // validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Email & password",
      })
    }

    // getting userDetails for Verifying the user is valid or not
    const userDetail = await UserModels.findOne({ email });
    if (!userDetail) {
      return res.status(200).json({
        success: false,
        msg: "Email is not registered"
      })
    }

    // password decrypting 
    const isPasswordValid = await comparePassowrd(password, userDetail.password)
    console.log(isPasswordValid)
    if (!isPasswordValid) {
      return res.status(200).json({
        success: false,
        msg: 'Invalid password'
      })
    }

    const token = JWT.sign({ id: userDetail.id }, process.env.USER_SECRET_KEY, { expiresIn: "4d" })
    return res.status(200).json({
      success: true,
      msg: 'Login successfully',
      userDetail,
      token
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      msg: "error in Login",
      error
    })
  }
}



// text controller
export const testController = (req, res) => {
  res.send('test successfully')
}









// demo:"Admin-signup"
export const adminSignupController = async (req, res) => {
  try {
    const { userId, email, password } = req.body;
    if (!userId) {
      return res.send({
        error: "userId is required..."
      })
    }
    if (!email) {
      return res.send({
        error: "email is required..."
      })
    }
    if (!password) {
      return res.send({
        error: "password is required..."
      })
    }

    // encrypting password
    const encryptedPassword = await encryptPassword(password);

    // validating
    const existingUserId = await AdminModels.findOne({ userId });
    const existingEmail = await AdminModels.findOne({ email });

    if (existingUserId) {
      return res.status(200).send({
        success: true,
        msg: "userId is registered",
        userId
      })
    } else if (existingEmail) {
      return res.status(200).send({
        success: true,
        msg: "email is already registered"
      })
    }

    // inserting data into admin schema
    const admin = await new AdminModels({ userId, email, password: encryptedPassword }).save();


    res.status(200).send({
      success: true,
      msg: "admin Register Successfully...",
      admin
    })

  } catch (error) {
    console.log(error)
    res.status(404).send({
      success: false,
      msg: "error in Admin Controller",
      error
    })
  }
}

// AdminAuthcontroller
export const adminAuthController = async (req, res) => {
  try {
    const { userId, email, password } = req.body
    if (!userId || !email || !password) {
      return res.status(404).send({
        success: false,
        msg: "userId and Email Not Found"
      })
    }

    // getting Details of the admin
    const adminDetail = await AdminModels.findOne({ userId, email });
    // if not found
    if (!adminDetail) {
      return res.status(404).send({
        success: false,
        msg: "userId and Email not Registered"
      })
    }
    // if found then decrypt the password
    const detailMatch = await comparePassowrd(password, adminDetail.password)
    if (!detailMatch) {
      return res.status(401).send({
        success: false,
        msg: 'Invalid password'
      })
    }

    const token = JWT.sign({ id: adminDetail.id }, process.env.ADMIN_SECRET_KEY, { expiresIn: "1d" });

    res.status(200).send({
      success: true,
      msg: 'Login successfully',
      adminDetail,
      token
    })


  } catch (error) {
    console.log(error)
    res.status(404).send({
      success: false,
      msg: "error in Admin Controller"
    })
  }
}
