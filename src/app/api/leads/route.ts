import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
}

const transporter = nodemailer.createTransport({
  host: "mail.bloombartending.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    const requiredFields: (keyof LeadData)[] = ["name", "email", "phone", "eventDate", "guestCount"];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email notification
    await transporter.sendMail({
      from: `"Bloom Bartending Website" <${process.env.EMAIL_USER}>`,
      to: "alyssa@bloombartending.com",
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${data.name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Event Date:</td><td style="padding: 8px;">${data.eventDate}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Guest Count:</td><td style="padding: 8px;">${data.guestCount}</td></tr>
        </table>
        <p style="color: #888; font-size: 12px;">Submitted on ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
