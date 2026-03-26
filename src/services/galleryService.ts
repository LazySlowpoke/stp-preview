export interface Gallery {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover_image: string | null;
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