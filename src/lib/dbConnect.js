import { MongoClient, ServerApiVersion } from 'mongodb'

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

if (!process.env.DB_NAME) {
    throw new Error('Please define the DB_NAME environment variable inside .env.local')
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

let cachedClient = null;
let cachedDb = null;

export default async function dbConnect(collectionName) {
    if (cachedClient && cachedDb) {
        return cachedDb.collection(collectionName);
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        cachedClient = client;
        cachedDb = client.db(dbName);
        return cachedDb.collection(collectionName);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

