# Phisherman: AI-Driven Phishing and Deepfake Simulation for Employee Training

## Inspiration 💡
In today's digital world, the lines between reality and deception blur with the prevalence of sophisticated phishing and deepfake technologies. Inspired by the real threats these techniques pose, we created Phisherman—a platform designed to educate and train employees by simulating phishing and deepfake attacks. This proactive approach equips individuals with the knowledge and skills to identify and react to such threats effectively, fostering a culture of security awareness within organizations.

## What it does 🤔
Phisherman utilizes advanced AI agents to create realistic simulations of phishing emails and deepfake videos, mimicking tactics used by cybercriminals. The platform provides a safe environment for employees to learn about the nuances of these threats through direct interaction with the simulations. By recognizing and responding to these simulations, users enhance their ability to detect and mitigate real-life cyber threats, ultimately protecting their personal and organizational data.

## How we built it ⚙️
Phisherman was developed through a collaborative effort, focusing on robust, scalable AI technology:

- **Front-end Development:** Built with React and styled with Tailwind CSS, offering a dynamic, user-friendly interface that facilitates interactive learning.
- **Back-end Development:** Utilized Flask, supported by a MongoDB database, ensuring efficient management of user data and simulation results.
- **AI Simulation Models:** Integrated GPT 4o for the AI agent and analysis of data. 

## Design 🎨
Our design process embraced an iterative approach, influenced by user-centered design principles:
- **Discover:** Identify common phishing and deepfake strategies through cybersecurity research.
- **Define:** Establish clear training objectives based on discovered information.
- **Develop:** Prototype interactive training modules.
- **Deliver:** Test and refine based on user feedback, ensuring effectiveness and engagement.

## Challenges we ran into 😤
One major challenge was developing AI models capable of generating convincingly realistic phishing and deepfake content that could serve educational purposes without being misleading or harmful. Balancing realism with ethical considerations required careful planning and execution. We also had to deal with ethical concerns of using familiar voices for deepfaked conversations. 

## Accomplishments that we're proud of 💚
We are particularly proud of our platform's ability to dynamically adjust the difficulty of simulations based on user proficiency, ensuring that all employees, regardless of their initial skill level, can benefit from personalized training sessions. Our user interface design also stands out, providing an intuitive experience that encourages engagement and learning.

## What we learned 🙌
The project deepened our understanding of AI's potential in cybersecurity education. We learned about the intricacies of phishing techniques and deepfake technology, enhancing our ability to develop realistic simulations.

## What's next? 🚀
Looking ahead, Phisherman aims to expand its features and reach:

- **Broader Simulation Spectrum:** Incorporate more varied and complex phishing scenarios and deepfake examples.
- **Customization Options:** Allow organizations to tailor simulations based on specific security concerns or previous attack experiences.
- **Real-time Feedback and Analytics:** Develop features that provide users with immediate feedback on their actions during simulations, along with detailed post-training analytics.
- **Integration with Existing Security Training Programs:** Work towards integrating Phisherman seamlessly with organizations' existing security protocols and training modules.

Through continuous improvement and expansion, Phisherman is set to become an essential tool in the arsenal of organizational cybersecurity training programs, enhancing the preparedness and responsiveness of employees against digital deception.

## Installation Instructions
### Frontend
1. cd into /frontend
2. run "npm i" to install necessary dependencies
3. run "npm run dev" to start the application
### Backend
1. cd into /backend
2. run "pip install -r src/requirements.txt" to install necesssary dependencies
3. run "python3 src/app.py" to start the application
