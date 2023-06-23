import React, { useEffect, useState } from "react";

const Home = (props) => {
	
	return (
		<div className="text-center d-flex justify-content-center">
			 <div className="mx-2 h1 rounded bg-dark text-white">{Math.floor(props.counter /1000000)%10} </div>	
			 <div className="mx-2 h1 rounded bg-dark text-white">{Math.floor(props.counter /100000)%10} </div>	
			 <div className="mx-2 h1 rounded bg-dark text-white">{Math.floor(props.counter /10000)%10} </div>	
			 <div className="mx-2 h1 rounded bg-dark text-white">{Math.floor(props.counter /1000)%10} </div>	
			 <div className="mx-2 h1 rounded bg-dark text-white">{Math.floor(props.counter /100)%10} </div>	
			 <div className="mx-2 h1 rounded bg-dark text-white">{Math.floor(props.counter /1)%10} </div>	
			 
		</div>
	);
};

export default Home;