
const menuItems = [  
    {
        id: "Abuse",
        title: "Reputation",
        contexts: ['selection']
    },  
    {        
        id: "Info",
        title: "Information",
        contexts: ['selection']
    },
    {
        id: "CyberChef",
        title: "CyberChef",
        contexts: ['selection']
    },
    {
        id: "EventError",
        title: "Event ID/Error code",
        contexts: ['selection']
    },
    {
        id: "Other",
        title: "Other",
        contexts: ['selection']
    },
    {
        parentId: "Abuse",
        id: "IP Abuse",
        title: "IP Reputation",
        contexts: ['selection']
    },
    {
        parentId: "Info",
        id: "IP Info",
        title: "IP/Domain WHOIS",
        contexts: ['selection']
    },
    {
        parentId: "Abuse",
        id: "Hash Rep",
        title: "Hash Reputation (SHA256)",
        contexts: ['selection']
    },
    {
        parentId: "Abuse",
        id: "Domain Rep",
        title: "Domain Reputation",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "Crypto Info",
        title: "Blockchain Address Info",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "MAC Info",
        title: "MAC Address Info",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "UA Info",
        title: "User Agent Info",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "CVE Info",
        title: "CVE Info",
        contexts: ['selection']
    },
    {
        parentId: "EventError",
        id: "Error Info",
        title: "Microsoft Error Info",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "file Info",
        title: "File Info",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "fileExt Info",
        title: "File Extension Info",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "LOLBin Lookup",
        title: "LOLBin Lookup",
        contexts: ['selection']
    },
    {
        parentId: "Other",
        id: "Winbindex Lookup",
        title: "Winbindex Lookup",
        contexts: ['selection']
    },
    {
        parentId: "EventError",
        id: "Event Info",
        title: "Event ID Info",
        contexts: ['selection']
    },
    {
        parentId: "Abuse",
        id: "VPN Info",
        title: "VPN Check",
        contexts: ['selection']
    },
    {
        parentId: "Abuse",
        id: "Email Info",
        title: "Email Check",
        contexts: ['selection']
    },
    {
        parentId: "CyberChef",
        id: "CC_Magic",
        title: "Magic",
        contexts: ['selection']
    },
    {
        parentId: "CyberChef",
        id: "CC_Defang",
        title: "Defang Content",
        contexts: ['selection']
    }
    ,
    {
        parentId: "CyberChef",
        id: "CC_Resolve_Domain",
        title: "Resolve Domain(s)",
        contexts: ['selection']
    }
    ];

    export default menuItems;
