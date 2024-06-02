import {ZodError, z} from 'zod'
import { connect, COLLECTIONS, TCOLLECTIONS } from '../db';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const bodySchema = z.object({
      type: z.string(),
      data: z.object({})
    })
    
    const body: z.infer<typeof bodySchema> = await req.json();
    bodySchema.parse(body)
    const {db} = await connect()
    const collection = COLLECTIONS.CATEGORIES
    const result = await db.collection(collection).insertOne({
      ...body.data,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return Response.json({
      message: "Item created successfully",
      result
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return Response.json({
        error
      })
    }
    return Response.json({
      error: error.message
    })
  }
}

export async function GET(req: Request) {
  const {db} = await connect()
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type')?.toUpperCase() as TCOLLECTIONS ?? 'CATEGORIES'
  const collection = COLLECTIONS[type]
  const all = await db.collection(collection).find().toArray()
  return Response.json({
    type,
    data: all
  });
}
