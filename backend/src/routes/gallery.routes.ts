import { Router } from "express";
import {
  createGalleryController,
  deleteGalleryController,
  getAllGalleriesController,
} from "../controllers/gallery.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const galleryRoutes = Router();

galleryRoutes.get("/", getAllGalleriesController);
galleryRoutes.post("/", authMiddleware, createGalleryController);
galleryRoutes.delete("/:id", authMiddleware, deleteGalleryController);

export default galleryRoutes;