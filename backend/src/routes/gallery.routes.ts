import { Router } from "express";
import {
  createGalleryController,
  deleteGalleryController,
  getAllGalleriesController,
  getGalleryBySlugController
} from "../controllers/gallery.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const galleryRoutes = Router();

galleryRoutes.get("/", getAllGalleriesController);
galleryRoutes.get("/:slug", getGalleryBySlugController)
galleryRoutes.post("/", authMiddleware, createGalleryController);
galleryRoutes.delete("/:id", authMiddleware, deleteGalleryController);

export default galleryRoutes;