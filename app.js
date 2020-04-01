const uuidv4 = require('uuid/v4')
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 6,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 5
    }
});


const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/jobs') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(
            makeJobs()
        );
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Running at http://${hostname}:${port}/`)
});

function makeJobs() {
    var jobsArray = [];
    var i = 0;
    while (i < 50) {
        jobsArray.push(createJob())
        i++;
      }
    
    return JSON.stringify(
        jobsArray    
    )
}

function createJob() {
    // return JSON.stringify(
    return {
        id: uuidv4(),
        title: lorem.generateWords(3),
        description: lorem.generateParagraphs(1),
        details: {
            datePosted: randomDate(new Date(2019, 0, 1), new Date()).toString(),
            summaryTitle: lorem.generateWords(4),
            flexibility: lorem.generateWords(1),
            remoteLevel: randomNumber(101) / 100,
            fullTime: randomNumber(99) / 100,
            partTime: randomNumber(99) / 100,
            flexibilitySchedule: randomNumber(99) / 100,
            location: lorem.generateWords(1),
            type: lorem.generateWords(1),
            schedule: lorem.generateWords(1),
            careerLevel: lorem.generateWords(1),
            travel: randomBool(),
            hoursPerWeek: randomNumber(40),
            salaryAndBenefits: lorem.generateWords(2),
            otherBenefits: lorem.generateWords(3),
            categories: lorem.generateWords(3)
        },
        company: {
            name: lorem.generateWords(2),
            description: lorem.generateParagraphs(1)
        }
    }
    // )
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function randomBool() {
    return Math.random() >= 0.5;
}


// Details


// Company  name: String  description: String