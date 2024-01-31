class ApiResponse {
    constructor(statusCode, message, data) {
        this.status = statusCode;
        this.data = data;
        this.message = message;
        this.success = true;
    }
}

export default ApiResponse;