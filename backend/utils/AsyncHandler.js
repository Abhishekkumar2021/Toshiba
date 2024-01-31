import ApiError from "./ApiError.js";

export default function AsyncHandler(handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (err) {
            if (err instanceof ApiError) {
                res.status(err.status).json(err);
            } else {
                res.status(500).json(new ApiError(500, err.message || 'Internal Server Error', err, err.stack));
            }
        }
    };
}
