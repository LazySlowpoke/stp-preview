import type { Request, Response } from "express";
import {
  createGalleryService,
  deleteGalleryService,
  getAllGalleriesService,
} from "../services/gallery.service";

export async function createGalleryController(req: Request, res: Response) {
  try {
    const { title, description, coverImage } = req.body;

    const gallery = await createGalleryService({
      title,
      description,
      coverImage,
    });

    return res.status(201).json(gallery);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Failed to create gallery",
    });
  }
}

export async function getAllGalleriesController(req: Request, res: Response) {
  try {
    const galleries = await getAllGalleriesService();
    return res.status(200).json(galleries);
  } catch {
    return res.status(500).json({
      message: "Failed to fetch galleries",
    });
  }
}

export async function deleteGalleryController(req: Request, res: Response) {
  try {
    const { id } = req.params;

        if (!id || Array.isArray(id)) {
      return res.status(400).json({
        message: "Invalid gallery id",
      });
    }

    const deleted = await deleteGalleryService(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Gallery not found",
      });
    }

    return res.status(200).json({
      message: "Gallery deleted successfully",
    });
  } catch {
    return res.status(500).json({
      message: "Failed to delete gallery",
    });
  }
}