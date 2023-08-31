interface ResponsePayload {
  data?: any;
  message: string; // Hacer que message sea obligatorio
  error?: any;
}

export function createResponse(payload: ResponsePayload) {
  return {
    status: payload.error ? 'false' : 'true',
    data: payload.data,
    message: payload.message,
  };
}
