export function isBackendReadyResponse(data) {
  if (typeof data === "string") {
    return data.toLowerCase().includes("server is running");
  }

  if (data && typeof data === "object") {
    const message = data.message;
    return typeof message === "string" && message.toLowerCase().includes("server is running");
  }

  return false;
}
