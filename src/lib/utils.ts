import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Search location using Nominatim (OpenStreetMap)
 * @param {string} query - text user types (e.g., "Noida, India")
 * @param {number} limit - max results (default 5)
 * @returns {Promise<Array<{ city: string, state: string, country: string, lat: string, lon: string }>>}
 */
export async function searchLocation(
  query: string = "",
  limit: number = 5
): Promise<
  Array<{
    city: string;
    state: string;
    country: string;
    lat: string;
    lon: string;
  }>
> {
  if (!query || query.length < 3) return [];

  const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=${limit}&q=${encodeURIComponent(
    query
  )}`;

  const res = await fetch(url, {
    headers: { "User-Agent": "DemoApp/1.0 (test@example.com)" }, // required by Nominatim
  });

  const data = await res.json();

  // simplify the response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((item:any) => {
    const addr = item.address;
    return {
      city: addr.city || addr.town || addr.village || "",
      state: addr.state || "",
      country: addr.country || "",
      lat: item.lat,
      lon: item.lon,
    };
  });
}
