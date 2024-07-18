// app/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide a full name.'],
        maxlength: [50, 'Full name cannot be more than 50 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address.'],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address.',
        ],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number.'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.'],
    },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
