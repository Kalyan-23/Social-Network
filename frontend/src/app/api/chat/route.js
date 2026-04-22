import { NextResponse } from "next/server";

export const runtime = "nodejs";

const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const GROQ_API_URL = "https://api.groq.com/openai/v1/responses";

function getAssistantText(data) {
  if (typeof data?.output_text === "string") {
    return data.output_text.trim();
  }

  const text = data?.output
    ?.flatMap((item) => item?.content || [])
    ?.filter((content) => content?.type === "output_text" && content?.text)
    ?.map((content) => content.text)
    ?.join("\n");

  return text?.trim();
}

function formatHistory(messages = []) {
  return messages
    .slice(-8)
    .map((message) => {
      const role = message.role === "assistant" ? "Assistant" : "User";
      return `${role}: ${message.content}`;
    })
    .join("\n");
}

export async function POST(request) {
  try {
    const { messages = [] } = await request.json();
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage?.content?.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY;
    const apiUrl = process.env.GROQ_API_KEY ? GROQ_API_URL : OPENAI_API_URL;
    const model = process.env.GROQ_API_KEY
      ? process.env.GROQ_MODEL || "openai/gpt-oss-20b"
      : process.env.OPENAI_MODEL || "gpt-4.1-mini";

    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY or OPENAI_API_KEY is missing in frontend/.env." },
        { status: 500 }
      );
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        instructions:
          "You are a helpful assistant inside a social media app. Keep replies friendly, concise, and safe.",
        input: formatHistory(messages),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "OpenAI request failed." },
        { status: response.status }
      );
    }

    return NextResponse.json({
      message: getAssistantText(data) || "I could not generate a reply.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Chat request failed." },
      { status: 500 }
    );
  }
}
