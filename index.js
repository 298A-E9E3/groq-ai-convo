const groq = require("groq-sdk");
const readline = require("readline-sync")
const bot1 = new groq.Groq();
const bot2 = new groq.Groq();
let testmsgs = [{role:"user",content:"hello"}];
const systemmsg1 = readline.question("sytem message 1: ");
const systemmsg2 = readline.question("sytem message 2: ");
let msgs1 = [{role:"system",content:systemmsg1}];
let msgs2 = [{role:"system",content:systemmsg2}];
async function talk(bot,msgs) {
    return(bot.chat.completions.create({
        messages: msgs,
        model: "llama3-8b-8192"
    }))
}
async function main() {
    let completion1 = await talk(bot1,msgs1);
    msgs2.push({role:"user",content:completion1.choices[0].message.content});
    msgs1.push({role:"assistant",content:completion1.choices[0].message.content});
    console.log("\x1b[33mBot 1\x1b[0m");
    console.log(completion1.choices[0].message.content);
    let completion2 = await talk(bot2,msgs2);
    msgs1.push({role:"user",content:completion2.choices[0].message.content});
    msgs2.push({role:"assistant",content:completion2.choices[0].message.content});
    console.log("\x1b[33mBot 2\x1b[0m");
    console.log(completion2.choices[0].message.content);
}
setInterval(main,5000);
