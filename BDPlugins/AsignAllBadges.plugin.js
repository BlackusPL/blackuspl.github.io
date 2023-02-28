/**
 * @name Asign All Badges
 * @description Asign all badges that discord have to your profile. Code by ImLorio
 * @author BlackusPL
 * @authorId 410243501494894603
 * @invite 4P8cAWqkqY
 * @version 1.2.5
 * @website https://blackuspl.github.io/DarknessAir
 * @source https://github.com/BlackusPL/DarknessAir/tree/main/BDPlugins
 * @updateUrl https://blackuspl.github.io/DarknessAir/BDPlugins/AsignAllBadges.plugin.js
 */
function AsignAllBadges() {
    (() => {
        webpackChunkdiscord_app.push([[Math.random()], {}, req => {
                    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter(x => x)) {
                        if (m.default && m.default.getCurrentUser !== undefined) {
                            return m.default.getCurrentUser().flags = Object.values({
                                DISCORD_EMPLOYEE: 1 << 0,
                                PARTNERED_SERVER_OWNER: 1 << 1,
                                HYPESQUAD_EVENTS: 1 << 2,
                                BUGHUNTER_LEVEL_1: 1 << 3,
                                HOUSE_BRAVERY: 1 << 6,
                                HOUSE_BRILLIANCE: 1 << 7,
                                HOUSE_BALANCE: 1 << 8,
                                EARLY_SUPPORTER: 1 << 9,
                                BUGHUNTER_LEVEL_2: 1 << 14,
                                EARLY_VERIFIED_BOT_DEVELOPER: 1 << 17,
                                DISCORD_CERTIFIED_MODERATOR: 1 << 18,
                                ACTIVE_DEVELOPER: 1 << 22
                            }).reduce((pre, cur) => pre + cur, 0);
                        }
                    }
                }
            ]);
    })();
     };
     function RemoveAllBadges() {
    (() => {
        webpackChunkdiscord_app.push([[Math.random()], {}, req => {
                    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter(x => x)) {
                        if (m.default && m.default.getCurrentUser !== undefined) {
                            return m.default.getCurrentUser().flags = Object.values({
                                DISCORD_EMPLOYEE: 0 << 0,
                                PARTNERED_SERVER_OWNER: 0 << 1,
                                HYPESQUAD_EVENTS: 0 << 2,
                                BUGHUNTER_LEVEL_1: 0 << 3,
                                HOUSE_BRAVERY: 0 << 6,
                                HOUSE_BRILLIANCE: 0 << 7,
                                HOUSE_BALANCE: 0 << 8,
                                EARLY_SUPPORTER: 0 << 9,
                                BUGHUNTER_LEVEL_2: 0 << 14,
                                EARLY_VERIFIED_BOT_DEVELOPER: 0 << 17,
                                DISCORD_CERTIFIED_MODERATOR: 0 << 18,
                                ACTIVE_DEVELOPER: 0 << 22
                            }).reduce((pre, cur) => pre + cur, 0);
                        }
                    }
                }
            ]);
    })()
     };
     /* const flags = { 
  DISCORD_EMPLOYEE: 1 << 0, 
  PARTNERED_SERVER_OWNER: 1 << 1, 
  HYPESQUAD_EVENTS: 1 << 2, 
  BUGHUNTER_LEVEL_1: 1 << 3, 
  HOUSE_BRAVERY: 1 << 6, 
  HOUSE_BRILLIANCE: 1 << 7, 
  HOUSE_BALANCE: 1 << 8, 
  EARLY_SUPPORTER: 1 << 9, 
  BUGHUNTER_LEVEL_2: 1 << 14, 
  EARLY_VERIFIED_BOT_DEVELOPER: 1 << 17, 
  DISCORD_CERTIFIED_MODERATOR: 1 << 18
};

function setBadge(badge) { window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags = badge;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags = badge}}}]); }

function getBadge(badge) { window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags += badge;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags += badge}}}]); }

function remBadge(badge) { window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags -= badge;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags -= badge}}}]); }

function resBadge() { window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags = 0;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags = 0}}}]); }

// exemple:
setBadge(flags.EARLY_SUPPORTER + flags.DISCORD_CERTIFIED_MODERATOR) // Set Discord Staff badge and Certified Moderator Badges
getBadge(flags.EARLY_SUPPORTER) // Add Discord Staff Badge
remBadge(flags.EARLY_SUPPORTER) // Remove Discord Staff Badge
resBadge() // Remove all badges*/
    function SystemBadge(value) {
        var systembadcheck = value;
        var findModule = (item) => window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => { for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) { if (m.default && m.default[item] !== undefined) return m.default } }])
        findModule('getCurrentUser').getCurrentUser().system = systembadcheck;
        if (findModule('getCurrentUser').getCurrentUser().bot == true) BotBadge(false);
    };
    function BotBadge(value) {
        var botbadcheck = value;
        var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
        findModule('getCurrentUser').getCurrentUser().bot = botbadcheck;
        if (findModule('getCurrentUser').getCurrentUser().system == true) SystemBadge(false);
    };
    module.exports = AAB => {
        return {
            start: () => {
                AsignAllBadges();
            },
            stop: () => {
                RemoveAllBadges();
            },
        getSettingsPanel: () => {
            const mySettingsPanel = document.createElement("div");
            mySettingsPanel.id = "my-settings";
    
    
            const buttonTextSetting = document.createElement("div");
            buttonTextSetting.classList.add("setting");
    
            const AssignAllBadgesReload = document.createElement("button")
            AssignAllBadgesReload.textContent = "Reload";
            AssignAllBadgesReload.type = "button";
            AssignAllBadgesReload.addEventListener("click", () => {AsignAllBadges()/*window.alert("Hello user, I working on it");*/});
            AssignAllBadgesReload.classList.add("bd-button");
            AssignAllBadgesReload.style = "margin-left: auto;";

            const AssignAllBadgesRemove = document.createElement("button")
            AssignAllBadgesRemove.textContent = "Remove";
            AssignAllBadgesRemove.type = "button";
            AssignAllBadgesRemove.addEventListener("click", () => {RemoveAllBadges()});
            AssignAllBadgesRemove.classList.add("bd-button");
            AssignAllBadgesRemove.style = "margin-left: 1%;";
    
            const AssignAllBadges = document.createElement("div");
            AssignAllBadges.textContent = "Reload/Remove all badges (Reload if disapeard)";
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
            buttonTextSetting.append(AssignAllBadges, SystemBadgediv, BotBadgediv);
    
    
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