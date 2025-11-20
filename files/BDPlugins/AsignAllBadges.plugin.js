/**
 * @name Asign All Badges
 * @description Asign all badges that discord have to your profile. Code by @lles
 * @author BlackusPL
 * @authorId 410243501494894603
 * @invite 4P8cAWqkqY
 * @version 1.3
 * @website https://blackuspl.github.io/DarknessAir
 * @source https://github.com/BlackusPL/DarknessAir/tree/main/BDPlugins
 * @updateUrl https://blackuspl.github.io/DarknessAir/BDPlugins/AsignAllBadges.plugin.js
 */
const c = webpackChunkdiscord_app.push([[Symbol()], {}, ({c}) => Object.values(c)]); const u = c.find(x => x?.exports?.Z?.getUserProfile).exports.Z; const m = c.find(x => x?.exports?.Z?.getCurrentUser).exports.Z.getCurrentUser(); 
function getBadges(){
    u.getUserProfile(m.id).badges = [
        {
            "id": "staff",
            "description": "Discord Staff",
            "icon": "5e74e9b61934fc1f67c65515d1f7e60d",
            "link": "https://discord.com/company"
        },
        {
            "id": "partner",
            "description": "Partnered Server Owner",
            "icon": "3f9748e53446a137a052f3454e2de41e",
            "link": "https://discord.com/partners"
        },
        {
            "id": "certified_moderator",
            "description": "Moderator Programs Alumni",
            "icon": "fee1624003e2fee35cb398e125dc479b",
            "link": "https://discord.com/safety"
        },
        {
            "id": "hypesquad",
            "description": "HypeSquad Events",
            "icon": "bf01d1073931f921909045f3a39fd264",
            "link": "https://discord.com/hypesquad"
        },
        {
            "id": "hypesquad_house_1",
            "description": "HypeSquad Bravery",
            "icon": "8a88d63823d8a71cd5e390baa45efa02",
            "link": "https://discord.com/settings/hypesquad-online"
        },
        {
            "id": "hypesquad_house_2",
            "description": "HypeSquad Brilliance",
            "icon": "011940fd013da3f7fb926e4a1cd2e618",
            "link": "https://discord.com/settings/hypesquad-online"
        },
        {
            "id": "hypesquad_house_3",
            "description": "HypeSquad Balance",
            "icon": "3aa41de486fa12454c3761e8e223442e",
            "link": "https://discord.com/settings/hypesquad-online"
        },
        {
            "id": "bug_hunter_level_1",
            "description": "Discord Bug Hunter",
            "icon": "2717692c7dca7289b35297368a940dd0",
            "link": "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs"
        },
        {
            "id": "bug_hunter_level_2",
            "description": "Discord Bug Hunter",
            "icon": "848f79194d4be5ff5f81505cbd0ce1e6",
            "link": "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs"
        },
        {
            "id": "active_developer",
            "description": "Active Developer",
            "icon": "6bdc42827a38498929a4920da12695d9",
            "link": "https://support-dev.discord.com/hc/en-us/articles/10113997751447?ref=badge"
        },
        {
            "id": "verified_developer",
            "description": "Early Verified Bot Developer",
            "icon": "6df5892e0f35b051f8b61eace34f4967"
        },
        {
            "id": "early_supporter",
            "description": "Early Supporter",
            "icon": "7060786766c9c840eb3019e725d2b358",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "premium",
            "description": "Subscriber since Dec 22, 2016",
            "icon": "2ba85e8026a8614b640c2837bcdfe21b",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl1",
            "description": "Server boosting since May 4, 2023",
            "icon": "51040c70d4f20a921ad6674ff86fc95c",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl2",
            "description": "Server boosting since Mar 11, 2023",
            "icon": "0e4080d1d333bc7ad29ef6528b6f2fb7",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl3",
            "description": "Server boosting since Feb 23, 2023",
            "icon": "72bed924410c304dbe3d00a6e593ff59",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl4",
            "description": "Server boosting since Sep 17, 2022",
            "icon": "df199d2050d3ed4ebf84d64ae83989f8",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl5",
            "description": "Server boosting since Aug 1, 2022",
            "icon": "996b3e870e8a22ce519b3a50e6bdd52f",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl6",
            "description": "Server boosting since Mar 26, 2022",
            "icon": "991c9f39ee33d7537d9f408c3e53141e",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl7",
            "description": "Server boosting since Feb 4, 2022",
            "icon": "cb3ae83c15e970e8f3d410bc62cb8b99",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl8",
            "description": "Server boosting since Nov 26, 2021",
            "icon": "7142225d31238f6387d9f09efaa02759",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl9",
            "description": "Server boosting since Sep 6, 2020",
            "icon": "ec92202290b48d0879b7413d2dde3bab",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "legacy_username",
            "description": "Originally known as " + m.tag,
            "icon": "6de6d34650760ba5551a79732e98ed60"
        },
        {
            "id": "bot_commands",
            "description": "Supports Commands",
            "icon": "6f9e37f9029ff57aef81db857890005e",
            "link": "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps?ref=badge"
        },
        {
            "id": "automod",
            "description": "Uses automod",
            "icon": "f2459b691ac7453ed6039bbcfaccbfcd"
        },
        {
            "id": "BD",
            "description": "BetterDiscord user",
            "icon": "5e74e9b61934fc1f67c65515d1f7e60d",
            "link": "https://betterdiscord.app/"
        }
    ];

    m.discriminator = "0";

};

function getPomelo(){
    m.discriminator = "0";
};
    function SystemBadge(value) {
        var systembadcheck = value;
        var findModule = (item) => window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => { for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) { if (m.default && m.default[item] !== undefined) return m.default } }])
        findModule('getCurrentUser').getCurrentUser().system = systembadcheck;
        if (findModule('getCurrentUser').getCurrentUser().bot == true) {BotBadge(false); AIBadge(false)};
    };
    function BotBadge(value) {
        var botbadcheck = value;
        var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
        findModule('getCurrentUser').getCurrentUser().bot = botbadcheck;
        if (findModule('getCurrentUser').getCurrentUser().system == true) {SystemBadge(false); AIBadge(false)};
    };
	function AIBadge(value) {
		var aibadcheck = value;
        var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
        findModule('getCurrentUser').getCurrentUser().isClyde = () => aibadcheck;
		if (findModule('getCurrentUser').getCurrentUser().isClyde == true) {SystemBadge(false); BotBadge(false)};
		
	};
    module.exports = AAB => {
        return {
            start: () => {
                //getBadges();
				try {
				if (u.getUserProfile(m.id).badges[26].id !== "BD") {
					console.log("re-adding badges")
				}} catch {getBadges()};
            },
            stop: () => {
               // RemoveAllBadges();
			   
            },
        getSettingsPanel: () => {
            const mySettingsPanel = document.createElement("div");
            mySettingsPanel.id = "my-settings";
    
    
            const buttonTextSetting = document.createElement("div");
            buttonTextSetting.classList.add("setting");
    
            const AssignAllBadgesReload = document.createElement("button")
            AssignAllBadgesReload.textContent = "Add Badges";
            AssignAllBadgesReload.type = "button";
            AssignAllBadgesReload.addEventListener("click", () => {getBadges();/*window.alert("Hello user, I working on it");*/});
            AssignAllBadgesReload.classList.add("bd-button");
            AssignAllBadgesReload.style = "margin-left: auto;";

            const AssignAllBadgesRemove = document.createElement("button")
            AssignAllBadgesRemove.textContent = "Remove";
            AssignAllBadgesRemove.type = "button";
            AssignAllBadgesRemove.addEventListener("click", () => {/*RemoveAllBadges()*/ alert("Work in progress")});
            AssignAllBadgesRemove.classList.add("bd-button");
            AssignAllBadgesRemove.style = "margin-left: 1%;";
    
            const AssignAllBadges = document.createElement("div");
            AssignAllBadges.textContent = "Get/Remove all badges (Reload discord to remove)";
            AssignAllBadges.style = "color: white; display: flex; align-items: center; margin-bottom: 20px;";
            
            AssignAllBadges.append(AssignAllBadgesReload, AssignAllBadgesRemove);

            const SystemBadgeon = document.createElement("button")
            SystemBadgeon.textContent = "Turn On";
            SystemBadgeon.type = "button";
            SystemBadgeon.addEventListener("click", () => {SystemBadge(true)});
            SystemBadgeon.classList.add("bd-button");
            SystemBadgeon.style = "margin-left: auto;";

            const SystemBadgeoff = document.createElement("button")
            SystemBadgeoff.textContent = "Turn Off";
            SystemBadgeoff.type = "button";
            SystemBadgeoff.addEventListener("click", () => {SystemBadge(false)});
            SystemBadgeoff.classList.add("bd-button");
            SystemBadgeoff.style = "margin-left: 1%;";
    
            const SystemBadgediv = document.createElement("div");
            SystemBadgediv.textContent = "Gives you the verified system tag (Profile popup is broken)";
            SystemBadgediv.style = "color: white; display: flex; align-items: center; margin-bottom: 20px;";
    
            SystemBadgediv.append(SystemBadgeon, SystemBadgeoff);

            const BotBadgeon = document.createElement("button")
            BotBadgeon.textContent = "Turn On";
            BotBadgeon.type = "button";
            BotBadgeon.addEventListener("click", () => {BotBadge(true)});
            BotBadgeon.classList.add("bd-button");
            BotBadgeon.style = "margin-left: auto;";

            const BotBadgeoff = document.createElement("button")
            BotBadgeoff.textContent = "Turn Off";
            BotBadgeoff.type = "button";
            BotBadgeoff.addEventListener("click", () => {BotBadge(false)});
            BotBadgeoff.classList.add("bd-button");
            BotBadgeoff.style = "margin-left: 1%;";
    
            const BotBadgediv = document.createElement("div");
            BotBadgediv.textContent = "Gives you the Bot tag";
            BotBadgediv.style = "color: white; display: flex; align-items: center; margin-bottom: 20px;";
    
            BotBadgediv.append(BotBadgeon, BotBadgeoff);
			
			const AIBadgeon = document.createElement("button")
            AIBadgeon.textContent = "Turn On";
            AIBadgeon.type = "button";
            AIBadgeon.addEventListener("click", () => {AIBadge(true)});
            AIBadgeon.classList.add("bd-button");
            AIBadgeon.style = "margin-left: auto;";

            const AIBadgeoff = document.createElement("button")
            AIBadgeoff.textContent = "Turn Off";
            AIBadgeoff.type = "button";
            AIBadgeoff.addEventListener("click", () => {AIBadge(false)});
            AIBadgeoff.classList.add("bd-button");
            AIBadgeoff.style = "margin-left: 1%;";
    
            const AIBadgediv = document.createElement("div");
            AIBadgediv.textContent = "Gives you the AI tag";
            AIBadgediv.style = "color: white; display: flex; align-items: center; margin-bottom: 20px;";
    
            AIBadgediv.append(AIBadgeon, AIBadgeoff);
            buttonTextSetting.append(AssignAllBadges, SystemBadgediv, BotBadgediv, AIBadgediv);
    
    
    /*        const darkModeSetting = document.createElement("div");
            darkModeSetting.classList.add("setting");
    
            const darkModeLabel = document.createElement("span")
            darkModeLabel.textContent = "Dark Mode";
    
            const darkModeInput = document.createElement("input");
            darkModeInput.type = "checkbox";
            darkModeInput.name = "darkMode";
    
            darkModeSetting.append(darkModeLabel, darkModeInput);*/
    
    
            mySettingsPanel.append(buttonTextSetting, /*darkModeSetting*/);
    
            return mySettingsPanel;
        }
    }}