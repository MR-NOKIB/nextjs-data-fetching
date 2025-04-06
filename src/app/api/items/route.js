import  dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";


export async function GET() {
    const data = await dbConnect("next-collection").find({}).toArray();
    return Response.json(data)
}



export async function POST(req) {
    const postData = await req.json();

    const result = await dbConnect("next-collection").insertOne(postData);
    revalidatePath("/products")
    return Response.json(result)
}