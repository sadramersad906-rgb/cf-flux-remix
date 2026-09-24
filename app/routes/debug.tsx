import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

export const loader: LoaderFunction = async () => {
  const token = "cfat_alPAd50xD6gmVsEa2JrN3aFbHeY5hy1oiDPvT6BG134fa511";
  const accountId = "3767e466b5f940071ccd2ca0aaadba0a";
  
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-1-schnell`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "a cat" }),
      }
    );
    
    const text = await response.text();
    return json({
      status: response.status,
      ok: response.ok,
      tokenFirst15: token.substring(0, 15),
      responsePreview: text.substring(0, 200),
    });
  } catch (error) {
    return json({ error: String(error) });
  }
};
