import express from 'express';
import path from 'path';
import apiRoutes from './routes/api.routes.js';
import cors from 'cors';

const __dirname = path.resolve();
const app = express();

// Setting up the port
const PORT = 8080

// Listening to the port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Routes
app.use('/api', apiRoutes);

// 404 Error
app.use((req, res) => {
    res.status(404).json({ message: "404 Not Found, endpoints starts with /api" });
});