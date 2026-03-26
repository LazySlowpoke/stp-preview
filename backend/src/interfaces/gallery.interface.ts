export interface CreateGalleryBody {
  title: string;
  description?: string;
  coverImage?: string;
}

export interface Gallery {
  id: string;
  title: string;
  description: string | null;
  cover_image: string | null;
  created_at: string;
}