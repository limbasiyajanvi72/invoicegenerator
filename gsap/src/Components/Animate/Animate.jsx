import React from "react";

function Animate() {
	return (
		<div className='flex gap-3 justify-center items-center h-[100vh]'>
			{/* <img src={watch1} /> */}
			<img
				src='/src/assets/Images/watch1.jpg'
				alt='Watch 1'
				className='h-72 max-w-[50px] object-cover rounded-md hover:flex-7'
			/>
			<img
				src='/src/assets/Images/watch2.jpg'
				alt='Watch 1'
				className='h-72 max-w-[50px] object-cover rounded-md hover:min-w-[384px] '
			/>
			<img
				src='/src/assets/Images/watch3.jpg'
				alt='Watch 1'
				className='h-72 max-w-[50px] object-cover rounded-md hover:min-w-[384px] '
			/>

			<img
				src='/src/assets/Images/watch4.jpg'
				alt='Watch 1'
				className='h-72 max-w-[50px] object-cover rounded-md hover:min-w-[384px] '
			/>
		</div>
	);
}

export default Animate;
