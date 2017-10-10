PlayersList = new Mongo.Collection('players');
if(Meteor.isClient){
  // this code only runs on the client
  Template.leaderboard.helpers({
    player() {
      return PlayersList.find({});
    },
    'selectedClass': function(){
      // code goes here
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer) {
        return "selected";
      }
    }
  }),
  Template.leaderboard.events({
    'click .player': function(){
      // code goes here
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });
}
if(Meteor.isServer){
  // this code only runs on the server

}
/*
import { Mongo } from 'meteor/mongo';
export const PlayersList = new Mongo.Collection('players');
*/