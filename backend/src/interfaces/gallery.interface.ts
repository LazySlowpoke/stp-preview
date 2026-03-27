export interface CreateGalleryBody {
  title: string;
  description?: string;
  coverImage?: string;
}

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
  alt_text: string| null;
  display_order: number;
  created_at: string;
}