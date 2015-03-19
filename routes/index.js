var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Home Page' });
});
/* GET FAQ page. */
router.get('/faq', function(req, res) {
    res.render('faq', { title: 'Frequently Asked Questions' });
});

/* GET services page. */
router.get('/services', function(req, res) {
    res.render('services', servicesObjects);
});

/* GET gmt page. */
router.get('/gmt', function(req, res) {
    res.render('gmt',{title:"GMT"});
});



/* GET about page. */
router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});
/* GET contact page. */
router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Contact' });
});

/* GET questions page. */
router.get('/questions', function(req, res) {
    res.render('questions',qSet);
});


module.exports = router;

var servicesObjects={services:[
    {serviceTitle:'Massage',
    serviceDescription:'Massage technique is based in Swedish and deep tissue. Focus of the treatment can vary from relaxing full body work, to more focused treatment for performance enhancement, or the management of chronic or acute injuries. I tend to work relatively deeply, and focus on some atypical areas. Treatments last for 70-80 minutes',
    serviceCost:'120',
    serviceImage:'hands.jpg'
    },
    {serviceTitle:'Acupuncture',
        serviceDescription:'Acupuncture treatments include a fair amount of hands on spot massage treatment and diagnostic work, for a relatively gentle needling experience.',
        serviceCost:'80',
        serviceImage:'needles.jpg'
    }
,
    {serviceTitle:'Chinese Herbal Medicine',
        serviceDescription:'Chinese herbal therapies help to support other treatments, and, in China, are a treatment in their own right. Depending on your condition, herbal treatment can add strength to your other treatments, and help you hold the effects of bodywork and acupuncture. The cost includes one monthly consultation, phone consults, and the cost of all herbs prescribed for the period.',
        serviceCost:'150/month',
        serviceImage:'mug.jpg'
    }

]};

qSet={
    questions:[{
        questionText:'Urinary System',
        questionType:'setHead',
        refersTo:'',
        answers:[],
        answerPlaceholder:''
    },{
        questionText:'Are there any qualitative issues with your urination?',
        questionType:'shortAnswer',
        refersTo:'',
        answers:[],
        answerPlaceholder:''

    },{
        questionText:'How many times per day do you urinate, on average?',
        questionType:'numerical',
        refersTo:'',
        answers:[],
        answerPlaceholder:'please use a number',
        validation:''

    },{
        questionText:'How many glasses of water do you drink?',
        questionType:'numericalRange',
        refersTo:'',
        answers:[],
        answerPlaceholder:''

    },{
        questionText:'Do you have any sensations when you urinate?',
        questionType:'multipleCheckbox',
        refersTo:'',
        answers:[],
        answerPlaceholder:''

    },{
        questionText:'My urination is comfortable and easy',
        questionType:'radioButton',
        refersTo:'',
        answers:[],
        answerPlaceholder:''

    },{
        questionText:'',
        questionType:'NumericalSlider',
        refersTo:'',
        answers:[],
        answerPlaceholder:''

    }

    ]};