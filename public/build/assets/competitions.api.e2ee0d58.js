import{B as e,H as i}from"./app.ca0dd7db.js";class s extends e{static get entity(){return"competitions"}static async addUpdatePlace(t){return await i.post(`${this.entity}/add-update-place/${t.id}`,t)}static async addUpdateStages(t){return await i.post(`${this.entity}/add-update-stages/${t.id}`,t)}static async addUpdateCondition(t){return await i.post(`${this.entity}/add-update-condition/${t.id}`,t)}static async addUpdateAdvertisement(t){return await i.post(`${this.entity}/add-update-advertisement/${t.id}`,t)}static async addUpdateConcertHonoring(t={}){let a=t.competition_id;return await i.post(`${this.entity}/add-update-concert-honoring/${a}`,t)}static async addUpdatePrizes(t){return await i.post(`${this.entity}/add-update-prizes/${t.competition_id}`,t)}static async updateCompetitionLevel(t={}){let a=t.competition_id;return await i.post(`${this.entity}/update-competition-level/${a}`,t)}}export{s as C};