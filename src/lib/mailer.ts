import ejs from "ejs";
import path from "path";
import transporter from "./nodemailer";

const renderEmailTemplate = async (
  templateName: string,
  data: any,
): Promise<string> => {
  const templatePath = path.join(
    process.cwd(),
    "email-templates",
    `${templateName}.ejs`,
  );
  return await ejs.renderFile(templatePath, data);
};

export const sendEmail = async (
  to: string,
  subject: string,
  templateName: string,
  data: any,
) => {
  const html = await renderEmailTemplate(templateName, data);

  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASSWORD);
  await transporter.sendMail({
    from: `<${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};
