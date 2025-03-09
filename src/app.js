import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";  // server se user ka browser ka cookie access aur set kat paun

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  //jab data form se aayega
app.use(express.urlencoded({extended: true, limit: "16kb"}))  //jab data url se aayega
app.use(express.static("public"))  // storing some files/folder in my server in public asset(folder)
app.use(cookieParser())

export {app}