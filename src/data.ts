import { z } from "zod";

const BASE_URL = "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net";

const employeeDto = z.object({
  email: z.string(),
  name: z.string(),
  telephone: z.string(),
  imageUrl: z.string(),
  officeName: z.string(),
  startDate: z.string(),
});

type EmployeeDto = z.infer<typeof employeeDto>;

export async function getEmployee(email: string): Promise<EmployeeDto | null> {
  const response = await fetch(
    `${BASE_URL}/employees/no/${email.split("@")[0]}`
  );
  if (!response.ok) return null;
  const data = await response.json();
  const parsed = employeeDto.safeParse(data);
  if (parsed.success) {
    return parsed.data;
  }
  return null;
}
