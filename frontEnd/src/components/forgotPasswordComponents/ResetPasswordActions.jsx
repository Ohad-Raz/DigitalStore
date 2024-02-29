// Import necessary dependencies
import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/User';
import styles from './ResetPassword.module.css';

export default function ResetPasswordActions() {
    const navigate = useNavigate();
    const { tokenId } = useParams();
    const { fetchUser } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(
                `http://localhost:4000/api/v1/reset-password/${tokenId}`,
                {
                    password: password,
                    passwordConfirm: passwordConfirm
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            localStorage.setItem("userToken", response.data.token);
            fetchUser();
            window.location.href ='/';
            console.log(response.data); // Log response data if needed
        } catch (error) {
            console.error(error);
            setError('An error occurred while resetting the password.');
        }
    };

    return (
        <div className={styles.resetPassword}>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="passwordConfirm">Confirm New Password:</label>
                    <input
                        type="password"
                        id="passwordConfirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}
