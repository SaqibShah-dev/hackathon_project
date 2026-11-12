export class ApiResponse {
  constructor(statusCode, message, data = null, meta = {}) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.meta = {
      timestamp: new Date().toISOString(),
      ...meta
    };
  }

  static success(res, { statusCode = 200, message = "Success", data = null, meta = {} }) {
    return res.status(statusCode).json(
      new ApiResponse(statusCode, message, data, meta)
    );
  }

  static error(res, { statusCode = 500, message = "Server error", data = null }) {
    return res.status(statusCode).json(
      new ApiResponse(statusCode, message, data)
    );
  }
}