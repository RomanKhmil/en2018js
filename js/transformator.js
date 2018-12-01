console.log("transformator connected");
function transform(from, to) 
{
	// transform text to array or vise
	if(from == "")
	{
		//le.log("array to text");
		//if you want to save all data
		for (var i = to.length - 1; i >= 0; i--) {
			from += "["+to[i][0]+","+to[i][1]+","+to[i][2]+"]";
		}
		// //le.log(from);
		return from
	}
	if(to == 0)
	{
		to = [];
		// if you want to take all data
		//le.log("text to array");
		var point = 0;
		var wordarr = [];
		for (var i = 0; i < from.length - 1; i++) 
		{
			var t = from[i];
			// //le.log(t);
			if(t == "["){
				point = i + 1;
			}
			else{
				if(t == ","){
					wordarr.push(from.substr(point,i - point));
					// //le.log(from.substr(point,i - point));
					point = i + 1;
				}
				else{
					if (from[i + 1] == "]") {
						i++
						wordarr.push(from.substr(point,i - point));
						point = i + 1;
						to.push(wordarr);
						wordarr = [];
					}
					if (t == "]") {
						wordarr.push(from.substr(point,i - point));
						point = i + 1;
						to.push(wordarr);
						wordarr = [];
					}
				}
			}
			//le.log(t);
		}
		//le.log(to);
		return to
	}
}