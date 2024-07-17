import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

const Shape = () => {
	const [address, setAddress] = useState("");
	const [coordinates, setCoordinates] = useState(null);
	const navigate = useNavigate();

	const handleGeocode = async () => {
		const geocoder = new window.google.maps.Geocoder();
		console.log("geocoder", geocoder);
		geocoder.geocode({ address }, (results, status) => {
			if (status === "OK") {
				const location = results[0].geometry.location;
				setCoordinates({ lat: location.lat(), lng: location.lng() });
			} else {
				alert(
					"Geocode was not successful for the following reason: " +
						status
				);
			}
		});
	};

	const redboxRef = useRef(null);
	const blueboxRef = useRef(null);

	useEffect(() => {
		const viewWidth = window.innerWidth;
		gsap.to(redboxRef.current, {
			x: viewWidth - redboxRef.current.offsetWidth,
			delay: 1,
			duration: 2,
			borderRadius: "50%",
			backgroundColor: "blue",
			rotate: 360,
		});
		gsap.fromTo(
			blueboxRef.current,
			{ x: viewWidth }, // Start position (off-screen to the right)
			{
				x: 0, // End position (original position)
				delay: 1,
				duration: 2,
				borderRadius: "50%",
				backgroundColor: "red",
				rotate: 360,
			}
		);
	}, []);

	return (
		<>
			{" "}
			<div>
				<div
					ref={redboxRef}
					className='w-32 h-32 md:w-64 md:h-64 bg-red-700'
				></div>
				<div
					ref={blueboxRef}
					className='w-32 h-32 md:w-64 md:h-64 bg-blue-700 '
				></div>
			</div>
			<button
				onClick={() => navigate("/compA")}
				className='bg-slate-600 rounded p-3 m-2'
			>
				CompA
			</button>
			<button
				onClick={() => navigate("/compB")}
				className='bg-slate-600 rounded p-3 m-2'
			>
				CompB
			</button>
			<button
				onClick={() => navigate("/social")}
				className='bg-slate-600 rounded p-3 m-2'
			>
				Social
			</button>
			<button
				onClick={() => navigate("/button")}
				className='bg-slate-600 rounded p-3 m-2'
			>
				Button
			</button>
			<button
				onClick={() => navigate("/animate")}
				className='bg-slate-600 rounded p-3 m-2'
			>
				Animate
			</button>
			<button
				onClick={() => navigate("/signin")}
				className='bg-slate-600 rounded p-3 m-2'
			>
				Sign in
			</button>
		</>
	);
};

export default Shape;
