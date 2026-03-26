import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import galleryRoutes from "./routes/gallery.routes";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

app.use("/auth", authRoutes)
app.use("/galleries", galleryRoutes)

export default app;