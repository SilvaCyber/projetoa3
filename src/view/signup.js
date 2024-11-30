import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Certifique-se de que o caminho para `firebase.js` está correto
import './signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
        }
        if (!formData.email) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                // Registrar os dados no Firestore
                const docRef = await addDoc(collection(db, "users"), {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password, // Senhas devem ser armazenadas de forma segura!
                    createdAt: new Date()
                });

                console.log("Usuário registrado com ID:", docRef.id);
                alert("Usuário registrado com sucesso!");

                // Navegar para a página de login
                navigate('/login');
            } catch (error) {
                console.error("Erro ao salvar dados no Firestore:", error);
                alert("Erro ao registrar usuário. Tente novamente.");
            }
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="logo-container">
                    <Link to="/">
                        <img src="logo.png" alt="Logo" className="auth-logo" />
                    </Link>
                </div>
                <h2>Cadastre-se</h2>
                
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <button type="submit" className="signup-button">
                    Cadastre-se
                </button>

                <p className="login-link">
                    Já tem uma conta? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
