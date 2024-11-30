import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Importe sua configuração do Firestore
import { collection, query, where, getDocs } from "firebase/firestore"; // Funções Firestore
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
                // Verificar se o e-mail e a senha estão corretos no Firestore
                const q = query(
                    collection(db, "users"), 
                    where("email", "==", formData.email)
                );
                const querySnapshot = await getDocs(q);
                
                if (querySnapshot.empty) {
                    // Se o usuário não for encontrado
                    setErrors({ email: 'Usuário não encontrado' });
                } else {
                    // Verificar se a senha corresponde
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();
                    
                    if (userData.password === formData.password) {
                        // Senha correta
                        alert("Login bem-sucedido!");
                        // Armazenar dados do usuário ou token (exemplo localStorage)
                        localStorage.setItem("user", JSON.stringify(userData));
                        // Redirecionar para a página principal ou dashboard
                        navigate('/'); // Ou onde você quiser redirecionar
                    } else {
                        // Se a senha estiver incorreta
                        setErrors({ password: 'Senha incorreta' });
                    }
                }
            } catch (error) {
                console.error("Erro ao autenticar usuário:", error);
                setErrors({ general: 'Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.' });
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="logo-container">
                    <Link to="/">
                        <img src="logo.png" alt="Logo" className="auth-logo" />
                    </Link>
                </div>
                <h2>Login</h2>
                
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

                <button type="submit" className="login-button">
                    Login
                </button>

                {errors.general && <p className="error-message">{errors.general}</p>}

                <p className="signup-link">
                    Não possui uma conta? <Link to="/signup">Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
