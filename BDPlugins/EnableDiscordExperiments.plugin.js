/**
 * @name Enable Discord Experiments
 * @description Enables the experiments tab in discord's settings.
 * @author BlackusPL
 * @authorId 410243501494894603
 * @invite 4P8cAWqkqY
 * @version 1.0.5
 * @website https://blackuspl.github.io/DarknessAir
 * @source https://github.com/BlackusPL/DarknessAir/tree/main/BDPlugins
 * @updateUrl https://blackuspl.github.io/DarknessAir/BDPlugins/EnableDiscordExperiments.plugin.js
 */
module.exports = class EDE {
    start() {
const c = webpackChunkdiscord_app.push([[Symbol()],{},({c})=>Object.values(c)]);
const u = c.find((x)=> x?.exports?.default?.getUsers).exports.default;
const m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);
        
u.getCurrentUser().flags |= 1;
m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {}
m.find((x)=>x.name === "ExperimentStore").storeDidChange()
        }
        stop() {}
    } 