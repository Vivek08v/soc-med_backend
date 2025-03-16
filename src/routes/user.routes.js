import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.mdw.js";
const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxcount: 1
        }
    ]),
    registerUser);  // http://localhost:8000/api/v1/users/register
// router.route("/login").get(loginUser)          // http://localhost:8000/api/v1/users/login

export default router;