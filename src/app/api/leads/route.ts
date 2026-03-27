import { NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
}

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

    // Send to Zapier webhook
    if (process.env.ZAPIER_WEBHOOK_URL) {
      const response = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          eventDate: data.eventDate,
          guestCount: data.guestCount,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Zapier webhook failed: ${response.status}`);
      }
    }

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

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
