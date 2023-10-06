import { cookies } from 'next/headers'
import type { NextApiRequest } from 'next'
import { NextResponse, NextRequest} from 'next/server'

export default async function (request: NextApiRequest) {
	const { referralId } = request.query
	
	if (!referralId) {
		return NextResponse.json({message: 'Missing referralId'}, {status: 400})
	}
	const cookieStore = cookies();
	cookieStore.set('referralId', referralId.toString());
	NextResponse.redirect('/create_user');
}