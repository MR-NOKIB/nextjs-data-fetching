import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const id = await params.id;
    const query = { _id: new ObjectId(id) }
    const result = await dbConnect("next-collection").findOne(query);
    return Response.json(result)
}

export async function PATCH(req, { params }) {
    const id = await params.id;
    const postData = await req.json();
    const filter = { _id: new ObjectId(id) }
    const updateResponse = await dbConnect("next-collection").updateOne(filter, {$set: { ...postData}}, {upsert: true});
    return Response.json(updateResponse)
}

export async function DELETE(req, { params }) {
    const p = await params;
    const query = { _id: new ObjectId(p.id) }
    const result = await dbConnect("next-collection").deleteOne(query);
    return Response.json(result)
}