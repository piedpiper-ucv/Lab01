const Imap = require('imap'),
    inspect = require('util').inspect; 

const nodemailer = require("nodemailer");


/********************* Send Mail *********************************/
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'yldemaro.1994@gmail.com',
      pass: '312312312'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);





/********************* Send Mail *********************************/

/********************* Receive Mail *********************************/

/*var imap = new Imap({
  user: 'piedpiper-ucv@yopmail.com',
  password: '1234567', 
  host: 'imap.gmail.com', 
  port: 993,
  tls: true
});


var lastMail = '';
var ShowAll = true;

imap.connect();

setInterval(function(){ 
  if(imap.state == 'authenticated'){
    imap.openBox('INBOX', true, function(err, box) {

      if(ShowAll){
        if (err) throw err;
        imap.search([ 'UNSEEN', ['SINCE', 'Jun 7, 2019'] ], function(err, results) {
          if (err) throw err;
          var f = imap.fetch(results, { bodies: ['HEADER.FIELDS (FROM TO SUBJECT)','TEXT'] });
          f.on('message', function(msg, seqno) {
            //console.log('Message #%d', seqno);
            msg.on('body', function(stream, info) {
              var buffer = '', count = 0;
              stream.on('data', function(chunk) {
                count += chunk.length;
                buffer += chunk.toString('utf8');
              });              
              stream.once('end', function() {
                if(inspect(Imap.parseHeader(buffer)) != '{}'){
                  console.log('-----------------------------------------------------------------------');                  
                  var text = inspect(Imap.parseHeader(buffer));
                  var n = text.indexOf("[");
                  var n2 = text.indexOf("]");
                  var Subject = text.substring(n+1,n2);
                  var n3 = text.indexOf("[",n2);
                  var n4 = text.indexOf("]",n3);
                  var To = text.substring(n3+1,n4);
                  var n5 = text.indexOf("[",n4);
                  var n6 = text.indexOf("]",n5);
                  var From = text.substring(n3+1,n4);
                  console.log('FROM: '+From);
                  console.log('TO:'+To);
                  console.log('Subject: '+Subject);
                  console.log('-----------------------------------------------------------------------');
                } 
              });
            });
            msg.once('end', function() {
            });
          });
          f.once('error', function(err) {
            console.log('error: ' + err);
          });
          f.once('end', function() {
            console.log('');
            console.log('Those are all the emails that you have unseen!');
            ShowAll = false;
          });
        });
      }

      var f = imap.seq.fetch(box.messages.total + ':*', { bodies: ['HEADER.FIELDS (FROM TO SUBJECT)','TEXT'] });
      f.on('message', function(msg, seqno) {
        if(lastMail == seqno){
          msg.once('end', function() {;
            console.log('');
            console.log('You do not have new messages!');
          });
        }
        else{
          lastMail = seqno;
          console.log('');
          console.log('You have a new messages!');

          msg.on('body', function(stream, info) {
            var buffer = '', count = 0;
            stream.on('data', function(chunk) {
              count += chunk.length;
              buffer += chunk.toString('utf8');
            });
            stream.once('end', function() {
              if(inspect(Imap.parseHeader(buffer)) != '{}'){
                console.log('-----------------------------------------------------------------------');                  
                var text = inspect(Imap.parseHeader(buffer));
                var n = text.indexOf("[");
                var n2 = text.indexOf("]");
                var Subject = text.substring(n+1,n2);
                var n3 = text.indexOf("[",n2);
                var n4 = text.indexOf("]",n3);
                var To = text.substring(n3+1,n4);
                var n5 = text.indexOf("[",n4);
                var n6 = text.indexOf("]",n5);
                var From = text.substring(n3+1,n4);
                console.log('FROM: '+From);
                console.log('TO:'+To);
                console.log('Subject: '+Subject);
                console.log('-----------------------------------------------------------------------');
              } 
            });
          });
  
          msg.once('end', function() {
          });
        }
       
      });

    });

  }
  else{
    console.log('loggin...');
  }

}, 10000);
*/
/********************* Receive Mail *********************************/


