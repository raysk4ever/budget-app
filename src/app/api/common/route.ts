import {ZodError, z} from 'zod'
import { connect, COLLECTIONS } from '../db';

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

export async function GET() {
  const {db} = await connect()
  const collection = COLLECTIONS.CATEGORIES
  const all = await db.collection(collection).find().toArray()
  return Response.json({
    all
  });
}
