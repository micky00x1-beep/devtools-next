export async function explainCode(code: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return `AI explanation:

Your code contains ${code.length} characters.

This is currently a simulated response.

In the next version, DevBoost AI will analyze the code and provide a detailed explanation of how it works, identify important parts, and suggest possible improvements.`;
}
