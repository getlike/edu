ava.onclick = function() {//всплывающее окно с аватаром
				var avatar = document.createElement("img");
					avatar.className = "avatar";
					avatar.src = "../img/hulk.png";
				body.appendChild(avatar);
				console.dir(avatar);
				 	
				 	var close = document.createElement("button");
				 		close.className = "close";
				 		close.type = "submit";
				 	body.appendChild(close);
					console.dir(close);

					personal.style.display = "none";
					
					close.onclick = function() {
						if ("click") {
						 	avatar.style.display = "none";
						 	close.style.display = "none";
						 	personal.style.display = "block";
						}
					}
			}