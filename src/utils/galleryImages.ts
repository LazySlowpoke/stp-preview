const imageModules = import.meta.glob("../assets/images/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
}) as Record<string, { default: string }>;

export interface ImageItem {
  path: string;
  src: string;
  folderName: string;
}

export interface GalleryItem {
  folderName: string;
  coverImage: string;
  images: string[];
}

export const imagePaths: ImageItem[] = Object.entries(imageModules).map(
  ([path, module]) => {
    const match = path.match(/images\/([^/]+)\/[^/]+$/);

    return {
      path,
      src: module.default,
      folderName: match ? match[1] : "",
    };
  }
);

export function getImagesByFolder(folderName: string): string[] {
  return imagePaths
    .filter((image) => image.folderName === folderName)
    .map((image) => image.src);
}

export function getGalleries(): GalleryItem[] {
  const galleriesMap = imagePaths.reduce<Record<string, string[]>>((acc, image) => {
    if (!image.folderName) return acc;

    if (!acc[image.folderName]) {
      acc[image.folderName] = [];
    }

    acc[image.folderName].push(image.src);

    return acc;
  }, {});

  return Object.entries(galleriesMap).map(([folderName, images]) => ({
    folderName,
    coverImage: images[0],
    images,
  }));
}