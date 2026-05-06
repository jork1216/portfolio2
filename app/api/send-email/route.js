import sendEmail from "../../../backend/sendEmail";

export async function POST(request) {
  const data = await request.json();

  await sendEmail({ body: data });

  return Response.json({
    success: true,
    message: "Successfully sent!",
  });
}
