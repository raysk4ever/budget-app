import { NextRequest } from 'next/server';
import { connect, COLLECTIONS } from '../db'

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const {db} = await connect()
        const { searchParams } = new URL(req.url);
        const perPage = +(searchParams.get('perPage') ?? 10);
        const pageNo = +(searchParams.get('pageNo') ?? 0);
        // const sortBy = searchParams.get('sort_by');

        const payments = await db.collection(COLLECTIONS.PAYMENTS).find({}).limit(perPage).skip(perPage * pageNo).toArray()

        return Response.json({
            message: 'Successfully fetched the payments',
            payments,
        })

    } catch (error: any) {
        return Response.json({
            error: error.message
        })
    }
}

export async function POST(req: NextRequest){
    try{
        const body = await req.json();
        const {db} = await connect()
        const transaction = await db.collection(COLLECTIONS.PAYMENTS).insertOne(body)

        return Response.json({
            message:'Successfully added the transaction',
            transaction

        })
    }
    catch(error:any){
        return Response.json({
            error: error.message
        })
    }


}