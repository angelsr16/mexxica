"use server";

import { sendEmail } from "@/lib/mailer";

export async function sendEmailAction(
  to: string,
  subject: string,
  templateName: string,
  data: any,
) {
  try {
    console.log("TRYING")
    await sendEmail(to, subject, templateName, data);
    console.log("SUCCESS");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to send email" };
  }
}
