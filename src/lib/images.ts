// Curated Unsplash photos used across the site.
// unsplash() builds a sized/cropped CDN url on demand.

export function unsplash(id: string, w: number, h?: number, q = 80) {
  const params = new URLSearchParams({
    q: String(q),
    w: String(w),
    auto: "format",
    fit: "crop",
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}

export const PHOTOS = {
  livingRoomFireplace: "1759238136854-a43787126db7", // Franco Debartolo
  kitchenOak: "1764526624453-db32c24eca55", // Clay Banks
  bathroomMarble: "1754522711595-84428937b07a", // Ela De Pure
  facadeScaffold: "1693639767415-27ff64ce4da2", // Troy Mortier
  blueprintArchive: "1721244654394-36a7bc2da288", // Amsterdam City Archives
  teamOffice: "1758873268745-dd2cf0d677b5", // Vitaly Gariev
  stoneVillage: "1764377723223-2353064702b1", // Marco Grosso
  livingRoomMinimal: "1768609239321-1cfe14893e80", // rawkkim
  stoneFacadeHouse: "1760067537293-6b30141d6a52", // Alef Morais
} as const;
