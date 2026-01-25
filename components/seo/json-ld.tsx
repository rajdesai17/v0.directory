interface JsonLdProps {
  // biome-ignore lint/suspicious/noExplicitAny: JSON-LD accepts various schema types
  data: Record<string, any> | Record<string, any>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
