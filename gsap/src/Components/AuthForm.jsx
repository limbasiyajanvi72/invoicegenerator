import { Box, TextField } from "@mui/material";
import React from "react";

function AuthForm({
	heading,
	accountStatus,
	link,

	email,
	password,
	emailError,
	passwordError,
	button,
	buttonValid,
	handleEmailChange,
	handlePasswordChange,
	handleSubmit,
	navigate,
}) {
	return (
		<div className='outer-container'>
			<div className='siginin-container '>
				<div className='logo-container'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='52'
						height='52'
						viewBox='0 0 35 35'
						fill='none'
					>
						<path
							d='M16 6.75556V0L1.02839 14.6389C0.462304 15.1924 0.457197 16.1016 1.01703 16.6615L3.55556 19.2'
							fill='#2196F3'
						/>
						<path
							d='M16 6.75556V0L30.9716 14.6389C31.5377 15.1924 31.5428 16.1016 30.983 16.6615L28.4444 19.2'
							fill='#1878C6'
						/>
						<path
							d='M3.55556 19.2L9.6 13.1556H16V19.2'
							fill='#1565C0'
						/>
						<path
							d='M28.4444 19.2L22.4 13.1556H16V19.2'
							fill='#10519D'
						/>
						<path
							d='M16 25.9556H9.95555L12.9778 22.7556L16 25.9556Z'
							fill='#1565C0'
						/>
						<path
							d='M16 32L22.0444 25.9556L16 25.9556V32Z'
							fill='#1878C6'
						/>
						<path
							d='M16 32L9.95555 25.9556H16V32Z'
							fill='#2196F3'
						/>
						<path
							d='M16 25.9556H22.0444L19.0222 22.7556L16 25.9556Z'
							fill='#10519D'
						/>
						<path
							d='M7.72363 21.7502C7.18605 22.3085 7.19441 23.1944 7.74243 23.7424L9.95556 25.9556L16 19.5556V13.1556'
							fill='#2196F3'
						/>
						<path
							d='M24.2764 21.7502C24.814 22.3085 24.8056 23.1944 24.2576 23.7424L22.0444 25.9556L16 19.5556V13.1556'
							fill='#1878C6'
						/>
					</svg>
				</div>
				<div className='heading-container'>
					<p className='heading-style'>{heading}</p>
					<p className='acc-style'>
						{accountStatus}
						<span onClick={() => navigate("/register")}>
							{link}
						</span>
					</p>
				</div>

				<Box
					component='form'
					autoComplete='off'
					className='input-container'
					onSubmit={handleSubmit}
				>
					<TextField
						label='Email *'
						variant='outlined'
						value={email}
						onChange={handleEmailChange}
						fullWidth
						margin='normal'
						InputLabelProps={{
							style: {
								fontSize: "14px",
								fontWeight: "500",
							},
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: "#4F46E5",
								},
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#4F46E5",
							},
						}}
					/>
					<span>{emailError}</span>
					<TextField
						id='outlined-password-input'
						label='Password *'
						type='password'
						autoComplete='current-password'
						value={password}
						onChange={handlePasswordChange}
						fullWidth
						margin='normal'
						InputLabelProps={{
							sx: {
								fontSize: "14px",
								fontWeight: "500",
							},
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								"&.Mui-focused fieldset": {
									borderColor: "#4F46E5",
								},
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#4F46E5",
							},
						}}
					/>
					<span>{passwordError}</span>

					<button
						type='submit'
						className='weight-500'
						disabled={buttonValid}
					>
						{button}
					</button>
				</Box>
			</div>
		</div>
	);
}

export default AuthForm;
