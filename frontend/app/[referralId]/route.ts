import { cookies } from 'next/headers'
import type { NextApiRequest } from 'next'
import { NextResponse, NextRequest} from 'next/server'
import * as Crypto from 'crypto'
export async function GET(request: NextRequest) {
	console.log(request.nextUrl, request.url)
	if (!request.nextUrl) {
		return NextResponse.redirect(new URL("/", request.url))
	}
	const referralId = request.nextUrl.pathname.slice(0);
	
	if (!referralId) {
		return NextResponse.json({message: 'Missing referralId'}, {status: 400})
	}
	const cookieStore = cookies();
	cookieStore.set('referralId', referralId);
	return NextResponse.redirect(new URL('/create', request.url));
}