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

    // Log the lead (in production, you'd save to database or send to CRM)
    console.log("=== NEW LEAD RECEIVED ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Event Date:", data.eventDate);
    console.log("Guest Count:", data.guestCount);
    console.log("Received at:", new Date().toISOString());
    console.log("========================");

    // Return success response
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
