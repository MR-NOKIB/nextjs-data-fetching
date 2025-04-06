import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
    try {
        const collection = await dbConnect("next-collection");
        const data = await collection.find({}).toArray();
        return Response.json(data);
    } catch (error) {
        console.error('Database error:', error);
        return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const postData = await req.json();
        const collection = await dbConnect("next-collection");
        const result = await collection.insertOne(postData);
        revalidatePath("/products");
        return Response.json(result);
    } catch (error) {
        console.error('Database error:', error);
        return Response.json({ error: 'Failed to insert data' }, { status: 500 });
    }
}