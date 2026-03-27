export interface Gallery {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_image: string | null;
  created_at: string;
}

export interface GalleryImage {
  id: string;
  gallery_id: string;
  image_url: string;
  alt_text: string | null;
  display_order: number;
  created_at: string;
}

export async function getAllGalleries(): Promise<Gallery[]> {
  const response = await fetch("http://localhost:3000/galleries", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch galleries");
  }

  return response.json();
}

export async function getGalleryBySlug(slug: string): Promise<Gallery> {
  const response = await fetch(`http://localhost:3000/galleries/${slug}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch gallery");
  }

  return response.json();
}

export async function getGalleryImagesBySlug(
  slug: string
): Promise<GalleryImage[]> {
  const response = await fetch(`http://localhost:3000/galleries/${slug}/images`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch gallery images");
  }

  return response.json();
}