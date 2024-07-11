import mongoose from 'mongoose';

const Connection = () => {
    const MONGODB_URI = "mongodb+srv://ushagotame000:<mongoose000>@cluster0.j9omzp5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log("Error while connecting with the database", error.message);
    });
};

export default Connection;
