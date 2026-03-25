"use server";

import { sendEmail } from "@/lib/mailer";

export async function sendEmailAction(
  to: string,
  subject: string,
  templateName: string,
  data: any,
) {
  try {
    await sendEmail(to, subject, templateName, data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to send email" };
  }
}
