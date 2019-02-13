function shareResult(domNode, text) {
	html2canvas(domNode).then(function(canvas) {
		var base64Picture = canvas.toDataURL("image/png");

		FBInstant.shareAsync({
		  intent: 'REQUEST',
		  image: base64Picture,
		  text: text,
		  data: { myReplayData: '...' },
		}).then(function() {
		  console.log('im here niggah');
		});
    });
}


function showAd() {
	// show ad if available
}
