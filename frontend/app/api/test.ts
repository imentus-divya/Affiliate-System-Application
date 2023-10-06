import { cookies } from 'next/headers'
import type { NextApiRequest } from 'next'
import { NextResponse, NextRequest} from 'next/server'

export default async function (request: NextApiRequest) {
	
	// const cookieStore = cookies();
	// NextResponse.redirect('/create_user');
    NextResponse.json({data:'test'})
    


}