import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request, context) {
  const comment = await request.json(); // Get the Thunder Client object Data
  const NewComm = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(NewComm);
  return new Response(JSON.stringify(NewComm), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function PATCH(request, context) {
  return Response.json();
}
