const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

type RequestOptions = {
  method?: "GET" | "POST";
  body?: Record<string, unknown>;
  token?: string | null;
};

export const apiRequest = async (path: string, options: RequestOptions = {}) => {
  const { method = "GET", body, token } = options;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: "Bearer ".concat(token) } : {}),
    },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage = data?.message || data?.errors?.[0]?.msg || "Request failed";
    throw new Error(errorMessage);
  }

  return data;
};

export { API_BASE_URL };
