function start(){
	
	var heads = document.querySelectorAll( ".folder" );
	for( var i = 0; i < heads.length; i++ )
		heads[i].onclick = fold;
	
}

function fold(){

	var descs = document.querySelectorAll( ".foldee" );
	for( var i = 0; i < descs.length; i++ ){
		if( descs[i] == this.nextSibling.nextSibling && !descs[i].className.match( / show/ ) ){
			descs[i].className += " show";
			location.hash = "#" + this.getAttribute( "link" );
			window.scrollBy(0,-75);
		}
		else
			descs[i].className = descs[i].className.replace( / show/g, "" );
	}

}