import { comments } from "../data";

export async function GET(request, context) {
  const { id } = await context.params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(request, context) {
  const { id } = await context.params;
  const body = await request.json();
  const { text } = body;
  const commentIndexToUpdate = comments.findIndex(
    (com) => com.id === parseInt(id)
  );
  comments[commentIndexToUpdate].text = text;
  return Response.json(comments);
}

export async function DELETE(request, context) {
  const { id } = await context.params;
  const index = comments.findIndex((com) => com.id === parseInt(id));
  const comToDelete = comments[index];
  comments.splice(index, 1);
  return Response.json(comToDelete);
}
