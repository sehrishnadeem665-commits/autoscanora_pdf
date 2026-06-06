import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if accessing alt pricing routes directly
  // if (pathname.match(/^\/pricing\/(alt-basic|alt-premium|alt-ultimate)$/)) {
  //   // Get referrer to allow navigation from main pricing page
  //   const referer = request.headers.get('referer');
  //   
  //   // If no referrer or referrer is not from /pricing page, redirect to main pricing
  //   if (!referer || !referer.includes('/pricing')) {
  //     return NextResponse.redirect(new URL('/pricing', request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/pricing/:path*'],
};
