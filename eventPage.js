
var Infomenu = {
    "id": "Info",
    "title": "Information Check",
    "contexts": ['selection']
};
var Othermenu = {
    "id": "Other",
    "title": "Other",
    "contexts": ['selection']
};
var EventError = {
    "id": "EventError",
    "title": "Event ID/Error code",
    "contexts": ['selection']
};
var Abusemenu = {
    "id": "Abuse",
    "title": "Reputation Check",
    "contexts": ['selection']
};
var IPAbuse = {
	"parentId": "Abuse",
    "id": "IP Abuse",
    "title": "IP Reputation",
    "contexts": ['selection']
};
var IPwhoIS = {
	"parentId": "Info",
    "id": "IP Info",
    "title": "IP Info",
    "contexts": ['selection']
};
var Hashmenu = {
	"parentId": "Abuse",
    "id": "Hash Rep",
    "title": "Hash Reputation",
    "contexts": ['selection']
};
var Domainabuse = {
	"parentId": "Abuse",
    "id": "Domain Abuse",
    "title": "Domain Reputation",
    "contexts": ['selection']
};
var Domaininfo = {
	"parentId": "Info",
    "id": "Domain Info",
    "title": "Domain Info",
    "contexts": ['selection']
};
var MACinfo = {
	"parentId": "Other",
    "id": "MAC Info",
    "title": "MAC Address Info",
    "contexts": ['selection']
};
var UAinfo = {
	"parentId": "Other",
    "id": "UA Info",
    "title": "User Agent Info",
    "contexts": ['selection']
};
var Errorinfo = {
	"parentId": "EventError",
    "id": "Error Info",
    "title": "Microsoft Error Info",
    "contexts": ['selection']
};
var Fileinfo = {
	"parentId": "Other",
    "id": "file Info",
    "title": "File Info",
    "contexts": ['selection']
};
var FileExtinfo = {
	"parentId": "Other",
    "id": "fileExt Info",
    "title": "File Extension Info",
    "contexts": ['selection']
};
var LOLBinmenu = {
	"parentId": "Other",
    "id": "LOLBin Lookup",
    "title": "LOLBin Lookup",
    "contexts": ['selection']
};
var Decbase64 = {
    "parentId": "Other",
	"id": "Decbase64",
    "title": "Decode Base64 / HEX",
    "contexts": ['selection']
};
var Eventinfo = {
	"parentId": "EventError",
    "id": "Event Info",
    "title": "Event ID Info",
    "contexts": ['selection']
};



chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create(Abusemenu)
	chrome.contextMenus.create(Infomenu)
	chrome.contextMenus.create(EventError)
	chrome.contextMenus.create(Othermenu)
	chrome.contextMenus.create(IPAbuse)
	chrome.contextMenus.create(IPwhoIS)
	chrome.contextMenus.create(MACinfo)
	chrome.contextMenus.create(Hashmenu)
	chrome.contextMenus.create(Fileinfo)
	chrome.contextMenus.create(FileExtinfo)
	chrome.contextMenus.create(Domainabuse)
	chrome.contextMenus.create(Domaininfo)
	chrome.contextMenus.create(LOLBinmenu)
	chrome.contextMenus.create(UAinfo)
	chrome.contextMenus.create(Errorinfo)
	chrome.contextMenus.create(Eventinfo)
	chrome.contextMenus.create(Decbase64)

	
});

function fixedEncodeURI (str) {
    return encodeURI(str).replace('/%5B/g', '[').replace('/%5D/g', ']');
}

chrome.contextMenus.onClicked.addListener(function(contextClick) {
	
	if (contextClick.selectionText && contextClick.menuItemId == "IP Abuse") {
		var VirusTotal = "https://www.virustotal.com/gui/search/" + fixedEncodeURI(contextClick.selectionText);
		var abuseipdb = "https://www.abuseipdb.com/check/" + fixedEncodeURI(contextClick.selectionText);
		chrome.tabs.create({url:VirusTotal});
		chrome.tabs.create({url:abuseipdb}); 
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "IP Info") {
		var TorRelay = "https://metrics.torproject.org/rs.html#search/" + fixedEncodeURI(contextClick.selectionText);
		var Whois = "https://www.whois.com/whois/" + fixedEncodeURI(contextClick.selectionText);
		chrome.tabs.create({url:TorRelay});
		chrome.tabs.create({url:Whois});
		//var alienvault = "https://otx.alienvault.com/indicator/ip/"  + fixedEncodeURI(contextClick.selectionText);
		//chrome.tabs.create({url:alienvault});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Hash Rep") {
        var VirusTotal = "https://www.virustotal.com/gui/search/" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:VirusTotal});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Domain Abuse") {
        var VirusTotal = "https://www.virustotal.com/gui/search/" + fixedEncodeURI(contextClick.selectionText);
		var abuseipdb = "https://www.abuseipdb.com/check/" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:VirusTotal});
		chrome.tabs.create({url:abuseipdb});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Domain Info") {
       // var Whois = "https://www.whois.com/whois/" + fixedEncodeURI(contextClick.selectionText);
		// var Ripe = "https://stat.ripe.net/app/launchpad/S1_" + fixedEncodeURI(contextClick.selectionText) + "_C36eC19eC30e";
		var alienvault = "https://otx.alienvault.com/indicator/domain/"  + fixedEncodeURI(contextClick.selectionText);
        //chrome.tabs.create({url:Whois});
		//chrome.tabs.create({url:Ripe});
		chrome.tabs.create({url:alienvault});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "LOLBin Lookup") {
        var LOLBin = "https://lolbas-project.github.io/#" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:LOLBin});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Decbase64") {
        var encoded = "https://cyberchef.org/#recipe=Magic(3,false,false,'')&input=" + btoa(fixedEncodeURI(contextClick.selectionText)).replaceAll('=','');
         chrome.tabs.create({url:encoded});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "fileExt Info") {
		var extension = fixedEncodeURI(contextClick.selectionText);
		extension = extension.replaceAll(".","");
        var file = "https://fileinfo.com/extension/" + extension;
        chrome.tabs.create({url:file});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "file Info") {
        var file = "https://www.file.net/search.html?q=site:file.net+" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:file});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "MAC Info") {
        var MAC = "https://maclookup.app/search/result?mac=" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:MAC});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "UA Info") {
		var fix = contextClick.selectionText;
		fix = fix.toLowerCase();
		fix = fix.replaceAll("/","-");
		fix = fix.replaceAll(".","-");
		fix = fix.replaceAll(";","-");
		fix = fix.replaceAll(' ',"-");
		fix = fix.replaceAll("(","-");
		fix = fix.replaceAll(")","-");
		fix = fix.replaceAll("_","-");
		fix = fix.replaceAll(",","-");
		fix = fix.replaceAll("--","-");
        var UA = "https://user-agents.net/string/" + fix;
        chrome.tabs.create({url:UA});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Error Info") {
        var Error = "https://login.microsoftonline.com/error?code=" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:Error});
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Event Info") {
        var EventID = "https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:EventID});
    }
	
});






	/*
	 Features:
		IP Abuse:
			Searches IP using VirusTotal & AbuseIPDB
		IP Info:
			Searches IP using TorRelaySearch and RipeNet
		Hash Reputation:
			Searches Hash using VirusTotal
		Domain Abuse:
			Searches Domain using VirusTotal and AbuseIPDB
		Domain Info:
			Searches Domain using RipeNet and WhoIs
		LOLBin Lookup:
			Searches LOLbin using LOLBIN using LOLBAS project
		Decode Base64:
			Decodes Base64 using CyberChef
		File Info:
			Searches files/extensions using fileinfo.com
		MAC Info:
			Searches for manufacturer of MAC Address using MacLookup
		User Agent Parse:
			Parses User Agent String using User-Agents.net
		Error Info:
			Searches Error code using Microsoft Online Error DB
		Event ID info:
			Searches Windows, Sharepoint, SQL Server, Exchange, and Sysmon Event ID's using https://www.ultimatewindowssecurity.com
	*/
