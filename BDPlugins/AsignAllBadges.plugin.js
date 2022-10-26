/**
 * @name Asign All Badges
 * @description Asign all badges that discord have to your profile. Code by Aholicknight
 * @author BlackusPL
 * @authorId 410243501494894603
 * @invite 4P8cAWqkqY
 * @version 1.1.0
 * @website https://blackuspl.github.io/DarknessAir
 * @source https://github.com/BlackusPL/DarknessAir/tree/main/BDPlugins
 * @updateUrl https://blackuspl.github.io/DarknessAir/BDPlugins/AsignAllBadges.plugin.js
 */
 function AsignAllBadges() {
    let flags = {
        "DISCORD_EMPLOYEE": 1 << 0,
        "DISCORD_PARTNER": 1 << 1,
        "HYPESQUAD_EVENTS": 1 << 2,
        "BUG_HUNTER_LEVEL_1": 1 << 3,
        "HOUSE_BRAVERY": 1 << 6,
        "HOUSE_BRILLIANCE": 1 << 7,
        "HOUSE_BALANCE": 1 << 8,
        "EARLY_SUPPORTER": 1 << 9,
        "BUG_HUNTER_LEVEL_2": 1 << 14,
        "VERIFIED_BOT_DEVELOPER": 1 << 17,
        "CERTIFIED_MODERATOR": 1 << 18
    };

    webpackChunkdiscord_app.push([[Math.random()], {}, req => {
                for (const m of Object.keys(req.c).map(x => req.c[x].exports).filter(x => x)) {
                    if (m.default && m.default.getCurrentUser !== undefined) {
                        return m.default.getCurrentUser().flags = Object.values(flags).reduce((pre, cur) => pre + cur, 0);
                    }
                }
            }
        ]);
};
function RemoveAllBadges() {
let flags = {
        "DISCORD_EMPLOYEE": 0 << 0,
        "DISCORD_PARTNER": 0 << 1,
        "HYPESQUAD_EVENTS": 0 << 2,
        "BUG_HUNTER_LEVEL_1": 0 << 3,
        "HOUSE_BRAVERY": 0 << 6,
        "HOUSE_BRILLIANCE": 0 << 7,
        "HOUSE_BALANCE": 0 << 8,
        "EARLY_SUPPORTER": 0 << 9,
        "BUG_HUNTER_LEVEL_2": 0 << 14,
        "VERIFIED_BOT_DEVELOPER": 0 << 17,
        "CERTIFIED_MODERATOR": 0 << 18
    };

    webpackChunkdiscord_app.push([[Math.random()], {}, req => {
                for (const m of Object.keys(req.c).map(x => req.c[x].exports).filter(x => x)) {
                    if (m.default && m.default.getCurrentUser !== undefined) {
                        return m.default.getCurrentUser().flags = Object.values(flags).reduce((pre, cur) => pre + cur, 0);
                    }
                }
            }
        ]);
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

const buttonTextLabel = document.createElement("button")
buttonTextLabel.textContent = "Reload";
buttonTextLabel.type = "button";
buttonTextLabel.addEventListener("click", () => {AsignAllBadges()/*window.alert("Hello user, I working on it");*/});
buttonTextLabel.classList.add("button-f2h6uQ","lookFilled-yCfaCM","colorBrand-I6CyqQ","sizeSmall-wU2dO-","grow-2sR_-F");
buttonTextLabel.style = "margin-left: auto;";

const buttonTextInfo = document.createElement("div");
buttonTextInfo.textContent = "Reload all badges (if disapeard)";
buttonTextInfo.style = "color: white; display: flex; align-items: center;";

const SpaceBetweenOptions = document.createElement("div");
SpaceBetweenOptions.classList.add("divider-_0um2u","dividerDefault-3C2-ws");
SpaceBetweenOptions.style = "margin-bottom: 20px;";

buttonTextInfo.appendChild(buttonTextLabel);

const buttonTextLabel2 = document.createElement("button")
buttonTextLabel2.textContent = "Remove";
buttonTextLabel2.type = "button";
buttonTextLabel2.addEventListener("click", () => {RemoveAllBadges()});
buttonTextLabel2.classList.add("button-f2h6uQ","lookFilled-yCfaCM","colorBrand-I6CyqQ","sizeSmall-wU2dO-","grow-2sR_-F");
buttonTextLabel2.style = "margin-left: auto;";

const buttonTextInfo2 = document.createElement("div");
buttonTextInfo2.textContent = "Remove all badges";
buttonTextInfo2.style = "color: white; display: flex; align-items: center;";

buttonTextSetting.append(buttonTextInfo , SpaceBetweenOptions, buttonTextInfo2);
buttonTextInfo2.appendChild(buttonTextLabel2);

mySettingsPanel.append(buttonTextSetting);

return mySettingsPanel;
}
}}