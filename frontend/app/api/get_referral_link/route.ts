import { NextResponse } from 'next/server'
import * as Crypto from 'crypto'
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const userId = searchParams.get('userId')
	if (!userId) {
		return NextResponse.json({type: "error", message: 'Missing userId'}, {status: 400})
	}
	const referralExt = Crypto.createHash("md5").update(userId).digest("hex")
	
	return NextResponse.json({ referralId: referralExt })
}