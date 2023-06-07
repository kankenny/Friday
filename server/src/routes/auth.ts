import express, { Request, Response, NextFunction } from "express"

// Auth Controller Functions
import {
  registerUser,
  loginUser,
  getSecurityQuestion,
  verifySecurityQA,
  resetPassword,
  changeUserDetails,
  changePassword,
  changeSecurityQA,
} from "../controllers/auth-controller/authController"

// Middlewares
import verifyToken from "../middlewares/verifyToken"

// Types
import JWTRequest from "../lib/types/JWTRequestType"

const AuthRoute = express.Router()

// REGISTRATION
AuthRoute.post("/register", registerUser)

// LOGIN
AuthRoute.post("/login", loginUser)

// GET SECURITY QUESTION
AuthRoute.get(
  "/get-security-question",
  (req: Request, res: Response, next: NextFunction) =>
    verifyToken(req as JWTRequest, res, next),
  (req: Request, res: Response) => getSecurityQuestion(req as JWTRequest, res)
)

// VERIFY SECURITY QA
AuthRoute.post(
  "/verify-security-qa",
  (req: Request, res: Response, next: NextFunction) =>
    verifyToken(req as JWTRequest, res, next),
  (req: Request, res: Response) => verifySecurityQA(req as JWTRequest, res)
)

// RESET PASSWORD
AuthRoute.post(
  "/reset-password",
  (req: Request, res: Response, next: NextFunction) =>
    verifyToken(req as JWTRequest, res, next),
  (req: Request, res: Response) => resetPassword(req as JWTRequest, res)
)

// CHANGE USER DETAILS
AuthRoute.post(
  "/change/user-details",
  (req: Request, res: Response, next: NextFunction) =>
    verifyToken(req as JWTRequest, res, next),
  (req: Request, res: Response) => changeUserDetails(req as JWTRequest, res)
)

// CHANGE PASSWORD
AuthRoute.post(
  "/change/password",
  (req: Request, res: Response, next: NextFunction) =>
    verifyToken(req as JWTRequest, res, next),
  (req: Request, res: Response) => changePassword(req as JWTRequest, res)
)

// CHANGE SECURITY QA
AuthRoute.post(
  "/change/security-qa",
  (req: Request, res: Response, next: NextFunction) =>
    verifyToken(req as JWTRequest, res, next),
  (req: Request, res: Response) => changeSecurityQA(req as JWTRequest, res)
)

export default AuthRoute
