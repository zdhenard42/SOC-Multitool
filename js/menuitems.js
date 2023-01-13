
const menuItems = [  
    {
        id: "Abuse",
        title: "Reputation Check",
        contexts: ['selection']
    },  
    {        
        id: "Info",
        title: "Information Check",
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
        title: "IP Info",
        contexts: ['selection']
    },
    {
        parentId: "Abuse",
        id: "Hash Rep",
        title: "Hash Reputation",
        contexts: ['selection']
    },
    {
        parentId: "Abuse",
        id: "Domain Abuse",
        title: "Domain Reputation",
        contexts: ['selection']
    },
    {
        parentId: "Info",
        id: "Domain Info",
        title: "Domain Info",
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
        id: "Decbase64",
        title: "Decode Base64 / HEX",
        contexts: ['selection']
    },
    {
        parentId: "EventError",
        id: "Event Info",
        title: "Event ID Info",
        contexts: ['selection']
    }
    ];

    export default menuItems;