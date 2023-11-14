import {Template} from 'meteor/templating'
import {ReactiveVar} from 'meteor/reactive-var';
import {Messages} from '../imports/api/messages'

import './main.html'

Template.chat.helpers({
    messages(){
        return Messages.find();

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
