import {Template} from 'meteor/templating'
import {ReactiveVar} from 'meteor/reactive-var';
import {Messages} from '../imports/api/messages';
import {Accounts} from '../imports/api/messages';
import './main.html';



Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
});

Template.chat.helpers({
    messages(){
        return Messages.find();

    },
    getUsername(userId){
        if (userId ){
            const user= Meteor.users.findOne(userId)
            if (user) return  user.username;
        }
    },
    formatDate(date){
        date.toLocaleString();
        
    },


});

Template.chat.events({
    'submit #chat-form'(event,instance){
        const text= event.target.text.value;

        event.preventDefault();
        Meteor.call('messages.insert',text, (err)=> {
            if (err) {
                alert(err.message);

            } else  {
                event.target.reset();
            }
        })
    },


});
