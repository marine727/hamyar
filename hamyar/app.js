/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
require('app-module-path').addPath(__dirname);
const path = require('path');
const cors = require("cors");
const helmet =require('helmet');
const express = require('express');
const routes = require('./routes');
const { createServer } = require("http");
const bodyParser = require('body-parser');
const expbs = require('express-handlebars');
const useragent = require('express-useragent');
const RateLimit = require('express-rate-limit');


  const app = express(); //4534
  const httpServer = createServer(app);
  const port = process.env.port || 4534;

  const limiter = new RateLimit({
    windowMs: 10*60*1000, // 15 minutes
    max: 500, //limit of number of request per IP
    delayMs: 0 //disables delays
  });
  
  const setting = expbs.create({
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/components'),
    extname: 'hbs',
    helpers: {
      ifEquals: function(a, b, options) {
        if(a === b) 
          return options.fn(this)

        return options.inverse(this)
      } 
    }
  })

  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(limiter);

  var whitelist = [
    'http://localhost:3000', 
    'https://hamyar.ir',
  ];

  var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }

  app.use(cors(corsOptionsDelegate));
  app.use(useragent.express());

  app.use('/static', express.static(path.join(__dirname, 'public')));
  app.use('/', routes);
  app.engine('hbs', setting.engine);
  app.set('view engine', 'hbs');


  httpServer.listen(port, () => console.log(`server running on port ${port}`))


