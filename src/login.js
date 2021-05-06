import React from "react";
import "./Styles/login.css";
import logo from "./img/logo.png";
import { userLogin } from "./utils/index";

function Login() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	return (
		<div>
			<div className='login'>
			
			<div className='login-container'>
					
			<p style={{textAlign:'center'}}>Login Page</p>
			<hr />

				<div className="input-container">
					<label>
						<p>USER NAME</p>
						<input
							type='text'
							name='username'
							placeholder='username@example.com'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<br />

					<label>
						<p>PASSWORD</p>
						<input
							type='password'
							name='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<br />

				</div>
			
				<div className="btn-container">
				<button
					type='submit'
					className='btn'
					onClick={() =>
						userLogin(email, password)
							.then((res) => console.log(res))
							.catch((err) => console.log(err))
					}
				>
					LOGIN
				</button>
				</div>
				</div>
			</div>
		</div>
	);
}

export default Login;

{/* <img src={logo}></img>
					<p>Admin Login</p> */}