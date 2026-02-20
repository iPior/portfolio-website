import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || process.env.PAYLOAD_SECRET

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret") ?? request.nextUrl.searchParams.get("secret")
  if (!REVALIDATE_SECRET || secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 })
  }

  let paths: string[] = ["/", "/blogs"]
  try {
    const body = await request.json().catch(() => ({}))
    if (Array.isArray(body.paths) && body.paths.length > 0) {
      paths = body.paths
    }
  } catch {
    // use default paths
  }

  for (const path of paths) {
    revalidatePath(path)
  }

  return NextResponse.json({ revalidated: true, paths })
}
