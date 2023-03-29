const urls = {
    "IP Abuse": ["https://www.virustotal.com/gui/search/", "https://www.abuseipdb.com/check/", "https://viz.greynoise.io/ip/", "https://exchange.xforce.ibmcloud.com/ip/", "https://www.talosintelligence.com/reputation_center/lookup?search=", "https://www.shodan.io/host/", "https://www.projecthoneypot.org/ip_", "https://feodotracker.abuse.ch/browse/host/"],
    "IP Info": ["https://www.whois.com/whois/", "https://whois.domaintools.com/"],
    "Hash Rep": ["https://www.virustotal.com/gui/search/", "https://exchange.xforce.ibmcloud.com/malware/", "https://www.talosintelligence.com/talos_file_reputation?s=", "https://bazaar.abuse.ch/browse.php?search=sha256:"],
    "Domain Rep": ["https://otx.alienvault.com/indicator/domain/", "https://www.virustotal.com/gui/search/", "https://www.barracudacentral.org/lookups/lookup-reputation?lookup_entry=", "https://urlhaus.abuse.ch/browse.php?search="],
    "Crypto Info": ["https://www.blockchain.com/explorer/search?search="],
    "LOLBin Lookup": ["https://lolbas-project.github.io/#"],
    "CC_Magic": ["https://cyberchef.org/#recipe=Magic(3,false,false,'')&input="],
    "CC_Defang": ["https://cyberchef.org/#recipe=Defang_URL(true,true,true,'Valid%20domains%20and%20full%20URLs')Defang_IP_Addresses()URL_Decode()&input="],
    "CC_Resolve_Domain": ["https://gchq.github.io/CyberChef/#recipe=Fork('%5C%5Cn','%5C%5Cn',false)DNS_over_HTTPS('https://dns.google.com/resolve','A',false,false)JPath_expression('Answer%5B0%5D%5B%5C'name,data%5C'%5D','',true)Find_/_Replace(%7B'option':'Simple%20string','string':'.%22%22'%7D,'%20%3D%3E%20',true,false,true,false)Find_/_Replace(%7B'option':'Simple%20string','string':'%22'%7D,'',true,false,true,false)&input="],
    "CVE Info": ["https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword="],
    "fileExt Info": ["https://fileinfo.com/extension/"],
    "file Info": ["https://www.file.net/search.html?q=site:file.net+"],
    "MAC Info": ["https://maclookup.app/search/result?mac="],
    "UA Info": ["https://user-agents.net/string/"],
    "Error Info": ["https://login.microsoftonline.com/error?code="],
    "Event Info": ["https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid="],
    "VPN Info": ["https://iphub.info/?ip=", "https://www.ip2location.com/demo/", "https://db-ip.com/", "https://metrics.torproject.org/rs.html#search/"],
    "Email Info": ["https://exchange.xforce.ibmcloud.com/url/", "https://mxtoolbox.com/SuperTool.aspx?run=toolpage&action=blacklist:"]
};



export default urls;