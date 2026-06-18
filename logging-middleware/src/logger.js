const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzYTUxNjI1QHNydS5lZHUuaW4iLCJleHAiOjE3ODE3Njg3MjcsImlhdCI6MTc4MTc2NzgyNywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjBiYmViZDZhLWU2OGMtNDcwNC05MzMxLTRmNjZjYWJmYjc3OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imppbm5hIG1hZGh1bWl0aGEgcmVkZHkiLCJzdWIiOiJkZTk1MGQ4OC1iNjFlLTQwMWUtYjU2Yi1hYTRjMzE2YmM0MzYifSwiZW1haWwiOiIyMzAzYTUxNjI1QHNydS5lZHUuaW4iLCJuYW1lIjoiamlubmEgbWFkaHVtaXRoYSByZWRkeSIsInJvbGxObyI6IjIzMDNhNTE2MjUiLCJhY2Nlc3NDb2RlIjoiYkRyZUFxIiwiY2xpZW50SUQiOiJkZTk1MGQ4OC1iNjFlLTQwMWUtYjU2Yi1hYTRjMzE2YmM0MzYiLCJjbGllbnRTZWNyZXQiOiJDWXZjekVGVVJWcmVhTW5NIn0.LpdJA7OBUNg-h8QJJcQGc_wEuk59cLo2r-x-1RHdusU";

export async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message,
        }),
      }
    );

    const data = await response.json();
    console.log("Log Response:", data);
    return data;
  } catch (error) {
    console.error("Log Error:", error);
  }
}