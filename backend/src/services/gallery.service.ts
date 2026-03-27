import pool from "../database/db";
import type { CreateGalleryBody, Gallery, GalleryImage } from "../interfaces/gallery.interface";

export async function createGalleryService({
  title,
  description,
  coverImage,
}: CreateGalleryBody): Promise<Gallery> {
  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  function generateSlug(title: string): string {
    return title
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  const slug = generateSlug(title);

  const result = await pool.query(
    `
      INSERT INTO galleries (title, slug, description, cover_image)
      VALUES ($1, $2, $3, $4)
      RETURNING id, title, slug, description, cover_image, created_at
    `,
    [title.trim(), slug, description || null, coverImage || null]
  );

  return result.rows[0];
}

export async function getAllGalleriesService(): Promise<Gallery[]> {
  const result = await pool.query(
    `
      SELECT id, title, slug, description, cover_image, created_at
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

export async function getGalleryBySlugService(slug:string): Promise<Gallery|null> {
  const result = await pool.query(
    `
    SELECT id, title, slug , description, cover_image, created_at
    FROM galleries
    WHERE slug = $1
    LIMIT 1
    `,
    [slug]
  );

  return result.rows[0] || null;
}

export async function getGalleryImagesBySlugService(slug:string): Promise<GalleryImage[]> {
  const galleryResult = await pool.query(
    `
    SELECT id
    FROM galleries
    WHERE slug = $1
    LIMIT 1
    `,
    [slug]
  );

  const gallery = galleryResult.rows[0];

  if (!gallery) {
    throw new Error("Gallery not found");
  }

  const imagesResult = await pool.query(
    `
    SELECT id, gallery_id, image_url, alt_text, display_order, created_at
    FROM gallery_images
    WHERE gallery_id = $1
    ORDER BY display_order ASC, created_at ASC
    `,
    [gallery.id]
  );

  return imagesResult.rows;
}