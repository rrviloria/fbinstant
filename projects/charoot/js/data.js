function getProjects() {
	return $.ajax({url: 'data/projects.json',  contentType: "application/json"});
}


function loadProjects(container, appId) {
	var entryPointData = FBInstant.getEntryPointData();
	getProjects().then(function(projects) {
		var column1 = '';
		var column2 = '';
		var params = queryParams();
		if(typeof projects == 'string') {
			projects = JSON.parse(projects);
		}
		$.each(projects, function( index, value ) {
			console.log(JSON.stringify(entryPointData));
			if(entryPointData != null && entryPointData.id != undefined && entryPointData.id != null && entryPointData.id == value["id"]) {
				loadApp(value["file-name"]);
			}
			if(index % 2 == 0) {
				column2 += '<div onclick="loadApp(\'' + value["file-name"] + '\')" class="dashboard-container"><img class="dashboard-image" src="' + value["image-url"] + '" style="width:100%"><div class="dashboard-label">' + value["app"] + '</div></div>';
			}
			else {
				column1 += '<div onclick="loadApp(\'' + value["file-name"] + '\')" class="dashboard-container"><img class="dashboard-image" src="' + value["image-url"] + '" style="width:100%"><div class="dashboard-label">' + value["app"] + '</div></div>';		
			}
		});
		$('.column-1').html(column1);
		$('.column-2').html(column2);
	});
}


function queryParams() {
	var queries = {};
	$.each(document.location.search.substr(1).split('&'),function(c,q){
		var i = q.split('=');
		if(i[1] != undefined && i[1] != null) {
			queries[i[0].toString()] = i[1].toString();
		}
	});
	return queries;
}


function loadApp(fileName) {
	$('.app').load("views/" + fileName + ".html");
	$('#also-try').show();
}
