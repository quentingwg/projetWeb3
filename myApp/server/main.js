import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import {Messages} from '../imports/api/messages'
async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  //Messages.remove() ; supprime les messages 
  
});
