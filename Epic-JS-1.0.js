var currPos = {x: 0, y: 0};
function toolTips() {
	document.body.insertAdjacentHTML("beforeend", "<div class='tooltip'></div>");
	var tElmt = document.querySelector('div.tooltip');
	document.querySelectorAll('[data-tooltip]').forEach(function (elmt) {
		elmt.addEventListener("mousemove", function (e) {
			tElmt.style.left = (e.clientX - 20)+"px";
		});
		elmt.addEventListener("mouseenter", function (e) {
			currPos.y = elmt.getBoundingClientRect().y + elmt.getBoundingClientRect().height;
			tElmt.innerHTML = elmt.getAttribute('data-tooltip');
			tElmt.style.display = "unset";
			if ((currPos.y + tElmt.getBoundingClientRect().height) >= window.innerHeight) {
				tElmt.style.top = (currPos.y - (elmt.getBoundingClientRect().height * 2.1))+"px";
			} else {
				tElmt.style.top = (currPos.y)+"px";
			}
		})
		elmt.addEventListener("mouseleave", function (e) {
			tElmt.style.display = "none";
		});
	});
}
function tblEdit(elmt) {
	this.elmt = elmt;
	this.ctn = new Object(this.elmt.querySelector('tbody').children);
	const dElmt = document.querySelector('ul.tblEdit-dialog');
	Object.values(this.ctn).forEach(function (tr) {
		tr.addEventListener("click", function (e) {
			currPos.y = tr.getBoundingClientRect().y;
			currPos.x = e.clientX;
			dElmt.style.display = "unset";
			dElmt.style.top = (currPos.y - (tr.getBoundingClientRect().height))+"px";
			dElmt.style.left = (currPos.x - (dElmt.getBoundingClientRect().width / 2.5))+"px";
			setTimeout(function () {
				dElmt.style.display = "none";
			}, 5000);
		});
	});
}
	// this.val = new Object(this.row);

