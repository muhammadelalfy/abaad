import{B as e,H as a}from"./app.ca0dd7db.js";class s extends e{static get entity(){return"arbitrators"}static async upload(t){return await a.post(`${this.entity}/upload`,t)}static async addWorkExperience(t){return await a.post(`${this.entity}/add-work-experience/${t.arbitrator_id}`,t)}static async deleteWorkExperience(t={}){return await a.post(`${this.entity}/delete-work-experience/${t.arbitrator}`,t)}static async addReading(t){return await a.post(`${this.entity}/add-reading/${t.arbitrator_id}`,t)}static async deleteReading(t){return await a.post(`${this.entity}/delete-reading/${t.arbitrator_id}`,t)}}export{s as A};