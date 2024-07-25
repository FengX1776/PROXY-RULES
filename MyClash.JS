// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "BanAD1": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Advertising/Advertising_Classical.yaml",
    "path": "./Ruleset/Feng1776/Reject1.yaml"
  },
  "Reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/Feng1776/Reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "openai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/blackmatrix7/openai.yaml"
  },
  "Speedtest": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Speedtest/Speedtest.yaml",
    "path": "./ruleset/loyalsoldier/Speedtest.yaml"
  },
  "Twitter": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter.yaml",
    "path": "./ruleset/loyalsoldier/twitter.yaml"
  },
  "Youtube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
    "path": "./ruleset/loyalsoldier/Youtube.yaml"
  },
  "Game": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/Game.yaml",
    "path": "./ruleset/loyalsoldier/Game.yaml"
  },
  "GameDL1": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/GameDownload/GameDownload.yaml",
    "path": "./ruleset/loyalsoldier/GameDL.yaml"
  },
  "GameDL2": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/GameDownloadCN/GameDownloadCN.yaml",
    "path": "./ruleset/loyalsoldier/GameDL2.yaml"
  },
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-SUFFIX,github.io,节点选择(延迟优选)", // Github Pages
  "DOMAIN,v2rayse.com,节点选择(延迟优选)", // V2rayse节点工具
  // blackmatrix7 规则集
  "RULE-SET,openai,ChatGPT",
  // Loyalsoldier 规则集
  "RULE-SET,Speedtest,节点选择(延迟优选)",
  "RULE-SET,Twitter,推特推送",
  "RULE-SET,Youtube,国外媒体",
  "RULE-SET,Game,游戏平台",
  "RULE-SET,GameDL1,全局直连",
  "RULE-SET,GameDL2,全局直连",
  "RULE-SET,applications,全局直连",
  "RULE-SET,private,全局直连",
  "RULE-SET,Reject,广告拦截",
  "RULE-SET,BanAD1,广告拦截",
  "RULE-SET,icloud,微软服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,direct,全局直连",
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "RULE-SET,telegramcidr,电报消息,no-resolve",
  // 其他规则
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

const proxyURLTEST = ["新加坡(延迟优选)","香港(延迟优选)","日本(延迟优选)","台湾(延迟优选)","韩国(延迟优选)","马来西亚(延迟优选)","越南(延迟优选)","印度(延迟优选)","德国(延迟优选)","英国(延迟优选)","澳大利亚(延迟优选)","土耳其(延迟优选)","美国(延迟优选)"]
const proxyLoadBalance = ["新加坡(负载均衡)","香港(负载均衡)","日本(负载均衡)","台湾(负载均衡)","韩国(负载均衡)","马来西亚(负载均衡)","越南(负载均衡)","印度(负载均衡)","德国(负载均衡)","英国(负载均衡)","澳大利亚(负载均衡)","土耳其(负载均衡)","美国(负载均衡)"]
const proxygroup = [
  {
    ...groupBaseOption,
    "name": "节点信息",
    "type": "load-balance",
    "include-all": true,
    "filter" : "剩余|流量|到期|套餐",
    "icon" : "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/openwrt.svg"
  },
  {
    ...groupBaseOption,
    "name": "节点选择(延迟优选)",
    "type": "select",
    "proxies": proxyURLTEST,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
  }, 
  {
    ...groupBaseOption,
    "name": "节点选择(负载均衡)",
    "type": "select",
    "proxies": proxyLoadBalance,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
  }, 
  {
    ...groupBaseOption,
    "name": "国外媒体",
    "type": "select",
    "proxies": ["节点选择(负载均衡)","美国(负载均衡)","日本(负载均衡)","韩国(负载均衡)","台湾(负载均衡)"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
  },
  {
    ...groupBaseOption,
    "name": "推特推送",
    "type": "select",
    "proxies": ["新加坡(负载均衡)","香港(负载均衡)","台湾(负载均衡)","日本(负载均衡)","美国(负载均衡)"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/twitter.svg"
  },
  {
    ...groupBaseOption,
    "name": "电报消息",
    "type": "select",
    "proxies": ["节点选择(延迟优选)","香港(延迟优选)","新加坡(延迟优选)","全局直连"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
  },
  {
    ...groupBaseOption,
    "name": "游戏平台",
    "type": "select",
    "proxies": ["节点选择(延迟优选)","香港(延迟优选)","日本(延迟优选)","澳大利亚(延迟优选)","土耳其(延迟优选)","全局直连"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/steam.svg"
  },
  {
    ...groupBaseOption,
    "url": "https://chatgpt.com",
    "expected-status": "200",
    "name": "ChatGPT",
    "type": "select",
    "proxies": ["美国(负载均衡)","日本(负载均衡)","澳大利亚(负载均衡)","全局直连"],
    "filter": "AD|🇦🇩|AE|🇦🇪|AF|🇦🇫|AG|🇦🇬|AL|🇦🇱|AM|🇦🇲|AO|🇦🇴|AR|🇦🇷|AT|🇦🇹|AU|🇦🇺|AZ|🇦🇿|BA|🇧🇦|BB|🇧🇧|BD|🇧🇩|BE|🇧🇪|BF|🇧🇫|BG|🇧🇬|BH|🇧🇭|BI|🇧🇮|BJ|🇧🇯|BN|🇧🇳|BO|🇧🇴|BR|🇧🇷|BS|🇧🇸|BT|🇧🇹|BW|🇧🇼|BZ|🇧🇿|CA|🇨🇦|CD|🇨🇩|CF|🇨🇫|CG|🇨🇬|CH|🇨🇭|CI|🇨🇮|CL|🇨🇱|CM|🇨🇲|CO|🇨🇴|CR|🇨🇷|CV|🇨🇻|CY|🇨🇾|CZ|🇨🇿|DE|🇩🇪|DJ|🇩🇯|DK|🇩🇰|DM|🇩🇲|DO|🇩🇴|DZ|🇩🇿|EC|🇪🇨|EE|🇪🇪|EG|🇪🇬|ER|🇪🇷|ES|🇪🇸|ET|🇪🇹|FI|🇫🇮|FJ|🇫🇯|FM|🇫🇲|FR|🇫🇷|GA|🇬🇦|GB|🇬🇧|GD|🇬🇩|GE|🇬🇪|GH|🇬🇭|GM|🇬🇲|GN|🇬🇳|GQ|🇬🇶|GR|🇬🇷|GT|🇬🇹|GW|🇬🇼|GY|🇬🇾|HN|🇭🇳|HR|🇭🇷|HT|🇭🇹|HU|🇭🇺|ID|🇮🇩|IE|🇮🇪|IL|🇮🇱|IN|🇮🇳|IQ|🇮🇶|IS|🇮🇸|IT|🇮🇹|JM|🇯🇲|JO|🇯🇴|JP|🇯🇵|KE|🇰🇪|KG|🇰🇬|KH|🇰🇭|KI|🇰🇮|KM|🇰🇲|KN|🇰🇳|KR|🇰🇷|KW|🇰🇼|KZ|🇰🇿|LA|🇱🇦|LB|🇱🇧|LC|🇱🇨|LI|🇱🇮|LK|🇱🇰|LR|🇱🇷|LS|🇱🇸|LT|🇱🇹|LU|🇱🇺|LV|🇱🇻|LY|🇱🇾|MA|🇲🇦|MC|🇲🇨|MD|🇲🇩|ME|🇲🇪|MG|🇲🇬|MH|🇲🇭|MK|🇲🇰|ML|🇲🇱|MM|🇲🇲|MN|🇲🇳|MR|🇲🇷|MT|🇲🇹|MU|🇲🇺|MV|🇲🇻|MW|🇲🇼|MX|🇲🇽|MY|🇲🇾|MZ|🇲🇿|NA|🇳🇦|NE|🇳🇪|NG|🇳🇬|NI|🇳🇮|NL|🇳🇱|NO|🇳🇴|NP|🇳🇵|NR|🇳🇷|NZ|🇳🇿|OM|🇴🇲|PA|🇵🇦|PE|🇵🇪|PG|🇵🇬|PH|🇵🇭|PK|🇵🇰|PL|🇵🇱|PS|🇵🇸|PT|🇵🇹|PW|🇵🇼|PY|🇵🇾|QA|🇶🇦|RO|🇷🇴|RS|🇷🇸|RW|🇷🇼|SA|🇸🇦|SB|🇸🇧|SC|🇸🇨|SD|🇸🇩|SE|🇸🇪|SG|🇸🇬|SI|🇸🇮|SK|🇸🇰|SL|🇸🇱|SM|🇸🇲|SN|🇸🇳|SO|🇸🇴|SR|🇸🇷|SS|🇸🇸|ST|🇸🇹|SV|🇸🇻|SZ|🇸🇿|TD|🇹🇩|TG|🇹🇬|TH|🇹🇭|TJ|🇹🇯|TL|🇹🇱|TM|🇹🇲|TN|🇹🇳|TO|🇹🇴|TR|🇹🇷|TT|🇹🇹|TV|🇹🇻|TW|🇹🇼|TZ|🇹🇿|UA|🇺🇦|UG|🇺🇬|US|🇺🇸|UY|🇺🇾|UZ|🇺🇿|VA|🇻🇦|VC|🇻🇨|VN|🇻🇳|VU|🇻🇺|WS|🇼🇸|YE|🇾🇪|ZA|🇿🇦|ZM|🇿🇲|ZW|🇿🇼",
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
  },
  {
    ...groupBaseOption,
    "name": "微软服务",
    "type": "select",
    "proxies": ["全局直连",...proxyURLTEST],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
  },
  {
    ...groupBaseOption,
    "name": "苹果服务",
    "type": "select",
    "proxies": ["节点选择(延迟优选)","香港(负载均衡)","日本(负载均衡)","美国(负载均衡)","全局直连"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
  },
  {
    ...groupBaseOption,
    "name": "广告拦截",
    "type": "select",
    "proxies": ["REJECT", "DIRECT"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
  },
  {
    ...groupBaseOption,
    "name": "全局直连",
    "type": "select",
    "proxies": ["DIRECT", "节点选择(延迟优选)"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
  },
  {
    ...groupBaseOption,
    "name": "漏网之鱼",
    "type": "select",
    "proxies": ["节点选择(延迟优选)", "全局直连"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
  },
  {
    ...groupBaseOption,
    "name": "新加坡(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "新加坡", 
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sg.svg"   
  },
  {
    ...groupBaseOption,
    "name": "新加坡(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "新加坡", 
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/sg.svg"   
  },
  {
    ...groupBaseOption,
    "name": "香港(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "香港", 
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hk.svg"   
  },
  {
    ...groupBaseOption,
    "name": "香港(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "香港",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/hk.svg"
  },
  {
    ...groupBaseOption,
    "name": "日本(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "日本",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jp.svg"
  },
  {
    ...groupBaseOption,
    "name": "日本(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "日本",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/jp.svg"    
  },
  {
    ...groupBaseOption,
    "name": "台湾(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "台湾",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tw.svg"    
  },
  {
    ...groupBaseOption,
    "name": "台湾(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "台湾", 
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tw.svg"   
  },
  {
    ...groupBaseOption,
    "name": "韩国(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "韩国",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kr.svg"
  },
  {
    ...groupBaseOption,
    "name": "韩国(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "韩国",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kr.svg"
  },
  {
    ...groupBaseOption,
    "name": "马来西亚(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "马来西亚",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/my.svg"
  },
  {
    ...groupBaseOption,
    "name": "马来西亚(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "马来西亚",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/my.svg"    
  },
  {
    ...groupBaseOption,
    "name": "越南(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "越南",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vn.svg"    
  },
  {
    ...groupBaseOption,
    "name": "越南(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "越南",  
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/vn.svg"  
  },
  {
    ...groupBaseOption,
    "name": "印度(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "印度",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/in.svg"
  },
  {
    ...groupBaseOption,
    "name": "印度(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "印度",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/in.svg"
  },
  {
    ...groupBaseOption,
    "name": "德国(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "德国",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/de.svg"    
  },
  {
    ...groupBaseOption,
    "name": "德国(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "德国",    
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/de.svg"
  },
  {
    ...groupBaseOption,
    "name": "英国(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "英国",   
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gb.svg" 
  },
  {
    ...groupBaseOption,
    "name": "英国(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "英国",   
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/gb.svg" 
  },
  {
    ...groupBaseOption,
    "name": "澳大利亚(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "澳大利亚",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/au.svg"    
  },
  {
    ...groupBaseOption,
    "name": "澳大利亚(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "澳大利亚",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/au.svg"    
  },
  {
    ...groupBaseOption,
    "name": "土耳其(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "土耳其", 
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tr.svg"   
  },
  {
    ...groupBaseOption,
    "name": "土耳其(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "土耳其",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/tr.svg"    
  },
  {
    ...groupBaseOption,
    "name": "美国(延迟优选)",
    "type": "url-test",
    "include-all": true,
    "filter" : "美国",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg"    
  },
  {
    ...groupBaseOption,
    "name": "美国(负载均衡)",
    "type": "load-balance",
    "include-all": true,
    "filter" : "美国",
    "icon" : "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/us.svg"
  },
];
// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = proxygroup;

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
