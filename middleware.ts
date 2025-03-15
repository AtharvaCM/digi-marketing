import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  try {
    // Check whether the maintenance page should be shown
    const isInMaintenanceMode = process.env.IS_MAINTENANCE_MODE === 'true';

    // If is in maintenance mode, point the url pathname to the maintenance page
    if (isInMaintenanceMode) {
      req.nextUrl.pathname = '/maintenance';

      // Rewrite to the url
      return NextResponse.rewrite(req.nextUrl);
    }
  } catch (error) {
    // show the default page if EDGE_CONFIG env var is missing,
    // but log the error to the console
    console.error(error);
  }
}

export const config = {
  matcher: ['/', '/about', '/contact', '/services', '/services/:path*'],
};
