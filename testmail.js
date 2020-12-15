var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Gmail
// change the user and pass !
var transporter = nodemailer.createTransport({
    name:'Zoho',
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'admin@valuecreativeca.com',
        pass: 'Bsa@820822'
    },
    dkim: {
        domainName: "valuecreativeca.com",
        keySelector: "email",
        privateKey: "-----BEGIN RSA PRIVATE KEY-----MIIEogIBAAKCAQEAhmBiZwo08MVPNDJdBprgl5jMlUMCSd/+Dzfq/nmj6jsL5qZL9YogZg9waiYAwXcMrTWwzsXpVTIJymiUebm1KtNqWgZc9HGQ7/lv31lvrDO50c1gSR8tzVdh3rMaKHm/SoIwrBxOIdw02KKYgyeCFxqtbd0OhloltNRf+NEnssg4hr2GQpRtcBzdnZBxsiaO9BJdSSZZKiD11s8xi11rZt/gl6UvTYHY+819yopaOH5wQfvGAWfK/UWR2N4q6+fKN+2k2GxUVKhhGKqxs5Up+IS53WwHNfk765PJ/H3dI8hpOvCIBPdafRw1sOVD+PmqfLvwkrnu2Vu+9430KIUt3QIDAQABAoIBAFd2qvYIdbb1pn0B/vzKmD70LM1GhVnSWspLCkDCqgdOkYt6WFykoDvt9qyQudMzCuQ+2ytrNFnIrQi7E1E7qAkM/N9F3wEYXk9kWwXUb9R1ApDljbNqgORz6PcMOo132SPFI6sS7WQqsZcEFiLf91PUgGfPB6I5UOunhCQu9xjtNg2l1Z6qyFeq4fAVvqacw3KairYVz8kjbE9KIBOCSLMUdIW11/O+dz0qaDk4EY4Hnn5zOf+7P2pjTTcnTfpjZCs7WZ6Cs6Fdy78djYQKR7GTRUcb4qaJQYEdXz0IfNnBcAVRGSQOXWBXwwyHBrfLaUH+7/eHVoCx7CvY6euJRoECgYEA3y51aex2lPfK9LIYbp42gr6Cgt59qWWZCghw7Ln9uc16LdQcsDfrQE6hf94mKg7N0bQgfsWB+EdJMZhJulGuMpxyau325MM9cLpV/fPC+JMv9GEHaru4t2eok7R8CUloxR5fLUGxuEqGWX55Gk0ovkuoWvnDXy3P+Qnwcd3ZamECgYEAmiLpiib6v+RId1BzF62sCjh3djbT+y5bj/gTODkkIo+EobaDmGgTDwaFr5V6WLUbQR5Y0vIlQzh2jdX7Brv6+5F5VjHx69HdIEo03f1Do2R8M4TAflYQe4XmZZZqotB/59zHU/ls3KP+BHPNBfO/ZHBB9QQufNmCAn7LLLi6jP0CgYBaLdqRl1N+8/UVFJVctR8Pi00O9jnOZdgFvs1qSejk18sDk46YAbBUBrGpCilfmyW9E0yCDOpsWNmRaZh46aI6nw54eHjnjKBZ2WD/wSxJ5qdc1ov5q6qCqSbrr+Til7/2zkPk9IOMFMjehoUGhKDu64E2aW9xGQDM/yAh0mOUYQKBgBSVdPquGe5mXgcRB02yM7dpswpmaAizOCcRyf9IIjs7T0sJRKmlvGXVSSUZoS0Xgnw/wTzqeW9wquRmHw/XKr1NwBZytQv5Cr61Kjo7CD1ZvfxjThGRDMJyL0KBw9vaXDpqkXP1a0RL4jBWBps04epX03cVB+BEa8hJhniCcudBAoGAY/2I0uQuo9Brq2vRU/v538juGfW6xuyVBq6+Tp1FvxYWe9gcpYPchMhP5BZpUh6WJ5Jwt+YBgzH9tMqnQOhbJWSCEg6hjajUQiBPRdrJ0ZVasqpcPhFeIet8RL2UlBz5T82p9crg+DR+EKiEmQGGAYqiVF2A1UyavzFqBr1qoNk=-----END RSA PRIVATE KEY-----"
    },
    tls: {
        rejectUnauthorized: false
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: 'admin@valuecreativeca.com', // sender address (who sends)
    to: 'suianbu@gmail.com', // list of receivers (who receives)
    subject: 'Hello Suian Bu ', // Subject line
    text: 'Hello Suian Bu ', // plaintext body
    html: '<b>Hello Suian Bu </b><br> Welcom to Value Creative' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});