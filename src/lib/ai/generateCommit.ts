export async function generateCommit(description: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return `feat: ${description}`;
}
