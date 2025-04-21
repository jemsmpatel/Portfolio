import { connectToDatabase } from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        await connectToDatabase();

        const newMessage = await Message.create({ name, email, message });

        return new Response(JSON.stringify({ success: true, message: "Message sent!" }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error saving message:", error);
        return new Response(JSON.stringify({ success: false, error: "Something went wrong!" }), {
            status: 500,
        });
    }
}