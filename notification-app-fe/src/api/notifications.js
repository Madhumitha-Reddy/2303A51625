const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzYTUxNjI1QHNydS5lZHUuaW4iLCJleHAiOjE3ODE3NzE3NTgsImlhdCI6MTc4MTc3MDg1OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImU2ZTFhZmNhLTFiNjItNDZmYi1iY2MzLTI1NTNjYTg5NWNjZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imppbm5hIG1hZGh1bWl0aGEgcmVkZHkiLCJzdWIiOiJkZTk1MGQ4OC1iNjFlLTQwMWUtYjU2Yi1hYTRjMzE2YmM0MzYifSwiZW1haWwiOiIyMzAzYTUxNjI1QHNydS5lZHUuaW4iLCJuYW1lIjoiamlubmEgbWFkaHVtaXRoYSByZWRkeSIsInJvbGxObyI6IjIzMDNhNTE2MjUiLCJhY2Nlc3NDb2RlIjoiYkRyZUFxIiwiY2xpZW50SUQiOiJkZTk1MGQ4OC1iNjFlLTQwMWUtYjU2Yi1hYTRjMzE2YmM0MzYiLCJjbGllbnRTZWNyZXQiOiJDWXZjekVGVVJWcmVhTW5NIn0.abl6793dZ0EiEpNm6OeHOJ3QRMKgQQICuMElY7gCUcw";

export async function fetchNotifications() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return data.notifications;
}