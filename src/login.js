import React from "react";
import "./Styles/login.css";
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
							className="typing-demo"
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
							className="typing-demo"
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
