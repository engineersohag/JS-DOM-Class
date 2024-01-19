let track = document.querySelector('#track');


function mouse_event(m){
	console.log(m.type);
}

		// mousedown
track.addEventListener("mousedown", mouse_event);

		// mouseup
track.addEventListener("mouseup", mouse_event);

		// Click
track.addEventListener("click", mouse_event);

		// dblclick
track.addEventListener("dblclick", mouse_event);

		// mouseover
// track.addEventListener("mouseover", mouse_event);

	// mouseout
// track.addEventListener("mouseout", mouse_event);

		// mouseenter
track.addEventListener("mouseenter", mouse_event);

		// mouseleave
track.addEventListener("mouseleave", mouse_event);

		// mousemove
track.addEventListener("mousemove", mouse_event);