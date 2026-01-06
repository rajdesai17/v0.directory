import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const {
      title,
      description,
      prompt,
      category,
      customCategory,
      v0Link,
      author,
      submissionType,
      mcpUrl,
      authType,
      instructionContent,
    } = await req.json()

    // Validate required fields based on submission type
    if (!title || !description) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    if (submissionType === "prompt" && (!prompt || !category)) {
      return NextResponse.json({ success: false, error: "Missing required fields for prompt" }, { status: 400 })
    }

    if (submissionType === "mcp" && !mcpUrl) {
      return NextResponse.json({ success: false, error: "Missing MCP URL" }, { status: 400 })
    }

    if (submissionType === "instruction" && !instructionContent) {
      return NextResponse.json({ success: false, error: "Missing instruction content" }, { status: 400 })
    }

    let issueBody = ""
    let issueTitle = ""
    let labels: string[] = []

    if (submissionType === "prompt") {
      const finalCategory = category === "other" ? customCategory : category
      issueTitle = `[Prompt Submission] ${title}`
      labels = ["prompt-submission", finalCategory.toLowerCase().replace(/\s+/g, "-")]
      issueBody = `## Prompt Title
${title}

## Description
${description}

## Category
${finalCategory}

## Full Prompt
\`\`\`
${prompt}
\`\`\`

## v0 Link
${v0Link || "Not provided"}

## Submitted by
${author || "Anonymous"}

---
*Submitted via v0.directory*`
    } else if (submissionType === "mcp") {
      issueTitle = `[MCP Submission] ${title}`
      labels = ["mcp-submission"]
      issueBody = `## MCP Name
${title}

## Description
${description}

## MCP URL
${mcpUrl}

## Authentication Type
${authType}

## Documentation URL
${v0Link || "Not provided"}

## Submitted by
${author || "Anonymous"}

---
*Submitted via v0.directory*`
    } else if (submissionType === "instruction") {
      issueTitle = `[Instruction Submission] ${title}`
      labels = ["instruction-submission"]
      issueBody = `## Instruction Title
${title}

## Description
${description}

## Instruction Content
\`\`\`
${instructionContent}
\`\`\`

## Submitted by
${author || "Anonymous"}

---
*Submitted via v0.directory*`
    }

    const res = await fetch("https://api.github.com/repos/rajdesai17/v0.directory/issues", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: issueTitle,
        body: issueBody,
        labels,
      }),
    })

    if (!res.ok) {
      const error = await res.json()
      console.error("GitHub API error:", error)
      return NextResponse.json({ success: false, error: error.message || "Failed to create issue" }, { status: 500 })
    }

    const data = await res.json()
    return NextResponse.json({ success: true, issueUrl: data.html_url })
  } catch (error) {
    console.error("Submit error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
