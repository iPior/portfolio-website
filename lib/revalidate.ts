/**
 * Call the revalidate API to refresh Next.js cache when Payload content changes.
 * Used by Payload collection hooks (afterChange, afterDelete).
 */
export async function triggerRevalidate(paths: string[] = ["/", "/blogs"]): Promise<void> {
  const secret = process.env.REVALIDATE_SECRET || process.env.PAYLOAD_SECRET
  if (!secret) return

  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  try {
    const res = await fetch(`${baseUrl}/api/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ paths }),
    })
    if (!res.ok) {
      console.warn("[revalidate] API returned", res.status, await res.text())
    }
  } catch (err) {
    console.warn("[revalidate] Failed to trigger revalidation:", err)
  }
}
