import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const token = await getToken({ req: request});
    const url = request.nextUrl.clone();

    if (url.pathname === '/' || url.pathname === '/sign-in' || url.pathname === '/sign-up') {
        if (token) {
            url.pathname = '/dashboard';
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }
}
 
export const config = {
  matcher: ['/', '/sign-up', '/sign-in', '/dashboard/:path*', '/verify/:path*'],
}