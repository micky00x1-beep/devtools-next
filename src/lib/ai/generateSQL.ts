export async function generateSQL(prompt: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return `SELECT *
FROM users
WHERE ${prompt};

-- This is currently a simulated AI response.

-- In the next version, DeToolBoost AI will generate optimized SQL queries based on your request.`;
}
