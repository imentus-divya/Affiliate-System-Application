import type { NextApiRequest } from 'next'
import { NextResponse, NextRequest} from 'next/server'
import { cookies } from 'next/headers'


export const create_user = async (email: string, referrer: string | null | undefined) => {

}
export async function POST(request: NextApiRequest) {
	
	console.log(request.headers)
	const {email} = request.body
	if (!email) {
		return NextResponse.json({type: "error",message: 'Missing email'}, {status: 400})
	}
	const cookieStore = cookies();
	const referrer =  cookieStore.get('referralId') ?  cookieStore.get('referralId')?.value : null;
	const user = await create_user(email, referrer);
}