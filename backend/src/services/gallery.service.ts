import pool from "../database/db";
import type { CreateGalleryBody, Gallery } from "../interfaces/gallery.interface";

export async function createGalleryService({
  title,
  description,
  coverImage,
}: CreateGalleryBody): Promise<Gallery> {
  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  const result = await pool.query(
    `
      INSERT INTO galleries (title, description, cover_image)
      VALUES ($1, $2, $3)
      RETURNING id, title, description, cover_image, created_at
    `,
    [title.trim(), description || null, coverImage || null]
  );

  return result.rows[0];
}

export async function getAllGalleriesService(): Promise<Gallery[]> {
  const result = await pool.query(
    `
      SELECT id, title, description, cover_image, created_at
      FROM galleries
      ORDER BY created_at DESC
    `
  );

  return result.rows;
}

export async function deleteGalleryService(id: string): Promise<boolean> {
  const result = await pool.query(
    `
      DELETE FROM galleries
      WHERE id = $1
      RETURNING id
    `,
    [id]
  );

  return result.rowCount !== null && result.rowCount > 0;
}