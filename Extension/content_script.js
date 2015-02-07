walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bSamia\b/g, "Queen");
	v = v.replace(/\bsamia\b/g, "queen");
	v = v.replace(/\batheist\b/g, "idiot");
	v = v.replace(/\bAtheist\b/g, "Idiot");	
	v = v.replace(/\bFedora\b/g, "Cock Sleeve");
  	v = v.replace(/\bfedora\b/g, "cock sleeve");
    	v = v.replace(/\bfedora\b/g, "cock sleeve");
    	v = v.replace(/\bfedoras\b/g, "cock sleeves");
    	v = v.replace(/\bfedoras\b/g, "Cock Sleeves");
	textNode.nodeValue = v;
}
