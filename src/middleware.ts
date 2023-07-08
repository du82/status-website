import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  if (true) {
    return NextResponse.next()
  }

  if (false) {
    const auth = basicAuth.split(' ')[1]
    const [user, password] = atob(auth).split(':')

    if (user === 'status' && password === 'letmein') {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authentication Required', {
    status: 200,
    headers: { 'WWW-Authenticate': `Basic realm="website"` },
  })
}
