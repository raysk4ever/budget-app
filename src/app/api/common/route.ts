import {ZodError, z} from 'zod'
import { connect, COLLECTIONS, TCOLLECTIONS, ALL_COLLECTIONS } from '../db';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

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
    const collection = COLLECTIONS[body.type.toUpperCase() as TCOLLECTIONS]
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
  const requestHeaders = new Headers(req.headers)
  console.log('inside GET', requestHeaders.get('userId'))

  const {db} = await connect()
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type')?.toUpperCase() as TCOLLECTIONS
  const collection = COLLECTIONS[type]
  const all = await db.collection(collection).find().toArray()
  return Response.json({
    type,
    data: all
  });
}

export async function PATCH(req: Request, res: NextResponse) {
  try {
    const {db} = await connect()
    const all = Object.values(COLLECTIONS)
    const bodySchema = z.object({
      id: z.string(),
      data: z.object({}),
      type: z.enum(['categories', 'payments']),
    })
    const body: z.infer<typeof bodySchema> = await req.json();
    bodySchema.parse(body)
    if (!ALL_COLLECTIONS.includes(body.type)) {
      throw new Error('Invalid Type')
    }
    const collection = COLLECTIONS[body.type.toUpperCase() as TCOLLECTIONS]
    console.log('body', body)
    const result = await db.collection(collection).updateOne({ _id: new ObjectId(body.id) }, { $set: { ...body.data }})
    return Response.json({
      status: true,
      result
    })
  } catch (error: any) {
    return Response.json({
      error: error
    })
  }
}

export async function DELETE(req: Request) {
  try {
    const {db} = await connect()
    const all = Object.values(COLLECTIONS)
    const bodySchema = z.object({
      id: z.string(),
      type: z.enum(['categories', 'payments']),
    })
    const body: z.infer<typeof bodySchema> = await req.json();
    bodySchema.parse(body)
    if (!ALL_COLLECTIONS.includes(body.type)) {
      throw new Error('Invalid Type')
    }
    const collection = COLLECTIONS[body.type.toUpperCase() as TCOLLECTIONS]
    const result = await db.collection(collection).findOneAndDelete({ _id: new ObjectId(body.id)})
    return Response.json({
      status: true,
      message: 'Record deleted successfully!',
      result
    })
  } catch (error: any) {
    return Response.json({
      error: error
    })
  }
}