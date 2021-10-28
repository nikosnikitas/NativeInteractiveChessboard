	function makeDroppable(e) {
		e.preventDefault();
		}
		
	function drag(e) {
		e.dataTransfer.setData("text", e.target.id);

			}
	
	function drop(e) {
		e.preventDefault();
		let data = e.dataTransfer.getData("text");
		e.target.appendChild(document.getElementById(data));
		}
	
	function start(e) {
		e.preventDefault();
		document.getElementById("empty-board").style="display: none;";
		document.getElementById("full-board").style="display: flex;";
		}
	
	function empty(e) {
		e.preventDefault();
		document.getElementById("full-board").style="display: none;";
		document.getElementById("empty-board").style="display: flex;";
		}
	
	function reset(e) {
		e.preventDefault();
		location.reload(true);	
	}
	
	function changeLang(e) {
		e.preventDefault();
		
	}
