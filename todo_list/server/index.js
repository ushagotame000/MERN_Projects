import express from 'express';
import Connection from './database/db.js'; // Ensure the correct relative path

const app = express();

// Call the Connection function to connect to the database
Connection();

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});
