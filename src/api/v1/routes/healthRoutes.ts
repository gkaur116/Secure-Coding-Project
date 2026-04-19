// Import required modules from Express
import { Router, Request, Response } from "express";
// Import HTTP status codes
import { HTTP_STATUS } from "../../../constants/httpConstants";

// Response structure for the health check
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// Create a router instance
const router: Router = Router();

// Health check endpoint
router.get("/health", (req: Request, res: Response) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    };
    
    res.status(HTTP_STATUS.OK).json(healthData);
});
    
// Export router
export default router;