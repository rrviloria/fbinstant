function shareResult(domNode, text, id) {
	html2canvas(domNode).then(function(canvas) {
		var base64Picture = canvas.toDataURL("image/png");

		FBInstant.shareAsync({
		  intent: 'REQUEST',
		  image: base64Picture,
		  text: text,
		  data: { id: id },
		}).then(function() {
		  $('#share-loading').hide();
		});
    });
}


function showAd() {
	// show ad if available
}
