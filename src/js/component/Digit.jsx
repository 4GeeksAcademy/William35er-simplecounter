import React, { useEffect, useState } from "react";
import { ProgressPlugin } from "webpack";
const Digit = (props) => {
	
	return (
		<div className="text-center">
			<h1>{props.count%10} </h1>
		</div>
	);
};

export default Digit;