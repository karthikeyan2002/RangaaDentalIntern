import React from "react";
import "./Styles/login.css";
import { useDispatch } from "react-redux";
import { login } from "./redux/actions";
import { userLogin } from "./utils/index";

function Login() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [error, setError] = React.useState(false);
	const dispatch = useDispatch();
	return (
		<div>
			<div className='login'>
				<div className='login-container'>
					{error ? (
						<div
							className='bg-red-100 border border-red-400 text-red-700 px-2 py-3 mb-4 rounded relative text-center'
							role='alert'
						>
							<p><strong className='font-semibold text-red-700'>Incorrect credentials </strong></p>
							{/* <span className='block sm:inline font-light'>
								Please check credentials
							</span> */}
						</div>
					) : (
						<></>
					)}
					<p style={{ textAlign: "center" }}>Login Page</p>
					<hr />

					<div className='input-container'>
						<label>
							<p>USER NAME</p>
							<input
								type='text'
								name='username'
								placeholder='Enter your username'
								className='typing-demo'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
						<br />

						<label>
							<p>PASSWORD</p>
							<input
								type='password'
								name='password'
								placeholder='Enter Password here'
								className='typing-demo'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
						<br />
					</div>

					<div className='btn-container'>
						<button
							type='submit'
							className='btn'
							onClick={() =>
								userLogin(email, password)
									.then((res) => dispatch(login()))
									.catch((err) => setError(true))
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
