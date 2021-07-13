    var v= require('./projectdatabase.js');
    var express = require('express');   
    var app = express();
    var mongoose = require('mongoose');
    var body_parser = require('body-parser');

    app.use(body_parser.json());
    const {Schema}  = mongoose;

    var user_schema= new Schema({
       username:{type:String, unique:true},
       fullname:String,
       email:{type:String, unique:true},
       password:{type:String},
       device_token:String,
       token:String
     });
     var post_schema= new Schema({
      user_id:{
          type:mongoose.Types.ObjectId,
          ref:"users"
      },
      caption:String,
      image:String,
      post_at:Date
     });

     var comment_schema= new Schema({
      user_id:{
              type:mongoose.Types.ObjectId,
              ref:"users"
          },
          post_id:{
              type:mongoose.Types.ObjectId,
              ref:"posts"
          },
          comment:String,
          comment_at:Date
        });

  var like_schema= new Schema({
   user_id:{
           type:mongoose.Types.ObjectId,
           ref:"users"
       },
       post_id:{
           type:mongoose.Types.ObjectId,
       ref:"posts"
       },
       like_status:
       {
           type:Boolean,
           default:0
       },
       liked_at:Date
      });

      var admin_schema= new Schema(
          {
            username:String,
            email:String,
            password:String
          }
     
      );

      var adminuser_schema= new Schema(
        {        
          email:String
        }
       );

       var follower_schema= new Schema({
           user_id:mongoose.Types.ObjectId,
           follower_user_id:mongoose.Types.ObjectId,
           status:Boolean
       });

       var following_schema= new Schema({
           user_id:mongoose.Types.ObjectId,
           following_user_id:mongoose.Types.ObjectId,
           status:Boolean
       });


    //    var chat_schema= new Schema({
    //    sender_id:{
    //       type:mongoose.Types.ObjectId,
    //        ref:"users"
    //     },
    //    receiver_id:{
    //    type: mongoose.Types.ObjectId,
    //     ref:"users"
    //  },
      
    //    message:String
    //    });

    var edit_schema=new Schema(
        {
            user_id:{
                type:mongoose.Types.ObjectId,
                ref:"users"
            },
            fullname:String,
            photo:String

        }
    )

       const chat_schema = new mongoose.Schema({
        sender_id: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required:true           
        },
        receiver_id: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required:true       
        },
        status:{
            type:String,
            enum:[0,1,2], /*0  = chat inactive and 1  = chat active and 2= chat declined*/
            default:0
        },
        sender_read:{
            type:String,
            enum:[0,1], /*0 - unread, 1 - read*/
           
            default:0
        },
        receiver_read:{
            type:String,
            enum:[0,1], /*0 - unread, 1 - read*/
           
            default:0
        },
        sender_enter:{
            type:String,
            enum:[0,1], /*0 - sender leave chat, 1 - sender entered in chat room*/
           
            default:0
        },
        receiver_enter:{
            type:String,
            enum:[0,1], /*0 - receiver leave chat, 1 - receiver enetered in chat room*/
           
            default:0
        },
        block:{
            type:String,
            enum:[0,1],
           
            default:0  /** 0 = not block and 1 = blocked */
        },
        user_deactivate:{
            type: Boolean,
            default: 0, 
          
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        }       
});

    const message_schema = new mongoose.Schema({
    chat_id:{
        type: Schema.Types.ObjectId, 
        ref: 'chats',
        required:true  
    },
    sender_id: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required:true           
    },
    receiver_id: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required:true       
    },
    message:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:""
    },
    status:{
        type:String,
        enum:[0,1],
        default:0
    },
    seen:{
        type:String,
        enum:[0,1],
        default:0
    },
    // timestamp: 
    // {
    //     type: String, 
    //     required:true
    // },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }       
  });

    var users = mongoose.model('users',user_schema);
    module.exports.users=users;

    var posts= mongoose.model('posts',post_schema);
    module.exports.posts=posts;

    var comment= mongoose.model('comments',comment_schema);
    module.exports.comment=comment;

    var like= mongoose.model('likes',like_schema);
    module.exports.like=like;

    var admin=mongoose.model('admins',admin_schema);
    module.exports.admin=admin;

    var adminuser=mongoose.model('adminusers',adminuser_schema);
    module.exports.adminuser=adminuser;

    var follow= mongoose.model('followers',follower_schema);
    module.exports.follow=follow;

    var following=mongoose.model('followings',following_schema);
    module.exports.following=following;

    var chat=mongoose.model('chats',chat_schema);
    module.exports.chat=chat;

    var message=mongoose.model('messages',message_schema);
    module.exports.message=message;

    var edit=mongoose.model("edits",edit_schema);
    module.exports.edit=edit;




