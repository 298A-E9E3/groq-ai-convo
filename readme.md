## Instructions:
### Setup:
Create a .env file with the parameter GROQ_API_KEY, and set it to your groq api key
run `npm install`    
### Using the program
To run the program, run node --env-file .env index.js    
You will be asked for two system messages. System messages are messages sent to the AI at the start of the session, and are be used to set up the AI. Some examples of ways system messages are used are:     
&nbsp;&nbsp;&nbsp;&nbsp;Giving the AI a specific personality    
&nbsp;&nbsp;&nbsp;&nbsp;Giving the AI a set of instructions to follow  
&nbsp;&nbsp;&nbsp;&nbsp;Setting up a scenario   
&nbsp;&nbsp;&nbsp;&nbsp; And much more    
The AIs will always obey the system messages; they will never act like ChatGPT and say "I can't do this because it's not ethical". One more important thing to note is that due to the way this program is set up, the AIs don't know each others system messages.    
      
Enjoy!