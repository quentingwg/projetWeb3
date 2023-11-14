import {Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';
export const Messages = new Mongo.Collection('messages');


Meteor.methods({
    'messages.insert'(text){
        check(text,String);
        Messages.insert({
            text,
            createdAt: new Date()
        }); 
    }
})