# Architecture Decisions

## Decision 1

Use Amazon DynamoDB for conversation storage.

**Reason**

DynamoDB is a fully managed, serverless NoSQL database that integrates well with AWS Lambda and provides low-latency access for conversation history.

---

## Decision 2

Store conversations immediately after Bedrock generates a response.

**Reason**

Only successful AI interactions should be recorded to maintain an accurate conversation history.

---

## Decision 3

Generate a unique session identifier for each conversation.

**Reason**

Provides a unique identifier for every logged interaction while keeping the implementation simple.

> Future Enhancement:
> Reuse a single sessionId across an entire user conversation instead of generating one per request.

---

## Decision 4

Use ISO-8601 timestamps.

**Reason**

Provides sortable timestamps compatible with DynamoDB and simplifies future analytics.
