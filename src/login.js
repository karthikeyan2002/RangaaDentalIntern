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
					<img src={logo}></img>
					<p>Admin Login</p>
					<label>
						<input
							type='text'
							name='username'
							placeholder='Enter User Name'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<br />

					<label>
						<input
							type='password'
							name='password'
							placeholder='Enter Password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<br />

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
	);
}

export default Login;
