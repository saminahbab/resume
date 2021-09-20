export const experience = [
    { year: "2019 - Present", institution: "Adarga", role: "Software Engineer" },
    { year: "2018 - 2019", institution: "UCL", role: "Msc Computer Science" },
    {
	year: "2017 - 2018",
	institution: "Little Dot Studios",
	role: "Data Analyst",
    },
    {
	year: "2013 - 2017",
	institution: "University of Edinburgh",
	role: "MA Economics & Politics",
    },
];

export const experienceDetail = {
    Adarga: [
	"Have worked in equal parts Software and ML Engineer. Have interacted with most parts of the stack in my time at Adarga. Have written a Kubernetes controller following the operator pattern for making business logic a first class object in our cloud infrastructre. Become knowledgable in the most up to date ML technologies. Have experimented with productionising modern NLP techniques such as neural search through vector databases, and worked on MLOps, and CI/CD of trained NLP models.",
    ],
    UCL: [
	"Completed my Masters in Computer Science at University College London.",
	"Courses included Software Engineering, Algorithmics, Architecture & Hardware, Systems Infrastructure, Machine Learning, Frontend Design, Database Management. Final Project includes analyzing Twitter to understand the dynamic connections of popular topics through a Graph Database approach.",
    ],
    "Little Dot Studios": [
	"Reporting on various clients and in-house social media channels. Often asked to analyze channels for the potential to grow and optimize from a data perspective.",
    ],
    "University of Edinburgh": [
	"Achieved a 2:1. Dissertation topic involved modelling the implication of increasing online education on self-selection. A theoretical model was coded in Python, for which I received a grade of 72.",
	"The course involved a thorough introduction to econometrics and statistics, through courses on Regression, Time Series Analysis, alongside Macroeconomic theory and International Political Economy topics.",
    ],
};

export const skills = {
    Devops: ["CircleCI", "Kubernetes", "AWS", "Terraform", "Semantic Release"],
    Languages: ["Python", "Golang", "Js/Ts", "Java", "GraphQl"],
    Data: [
	"Kafka",
	"Pulsar",
	"Neo4j",
	"Elastic",
	"Pachyderm",
	"Seldon",
	"Neptune",
    ],
};

export const skillsDetail = {
    CircleCI: [
	"Have used CircleCI as the main Continuous Integration tool. Experience involves setting up CI jobs through manifests, and pushing to container registries",
    ],
    Kubernetes: [
	"Have been using Kubernetes as the main orchestration tool to maintain event streaming pipelines.",
	"Have some experience of using ArgoCD to practice Continuous deployment in the cloud.",
    ],
    AWS: [
	"Intermediate  skills in AWS. Familiar with S3, elastic IP, and have provisioned resources through terraform",
	"Will be looking to get certified in this year.",
    ],
    Terraform: [
	"Have started provisioning infrastructure through Terraform.",
	"Very into the composable infrastructure as code philosophy and have seen setup time for provisioning reduced greatly",
	"At Adarga, have been accustomed to managing Bitbucket repositories through Terraform.",
    ],
    Python: [
	"Have been using Python for a number of years.",
	"Familiar with most of its data science libraries, and is tool of choice for most data analyis.",
	"Have raised FAAS services for NLP models in Python so am familiar with its API/Microservice libraries.",
	"Extensive experience with Spacy.",
    ],
    Golang: [
	"Recently picked up Golang. Have created GraphQL servers for backend infrastructure in Adarga.",
	"Using Golang in my personal projects. Really enjoying the design and simplicity of the language.",
    ],
    "Js/Ts": [
	"Have used Javascript for React apps and visualisations. Have worked on node services at Adarga, and am familiar with ES6 syntax. Created a React dashboard for an industry project at UCL.",
	"React experience includes Tailwind, which I am currently learning, and was used in this app. Am familiar with libraries such as Redux and Router.",
    ],
    Java: [
	"Have used Java to create scrapers, and professionally to develop components in event pipelines.",
	"However, using Java less and less as other languages have taken over its space.",
    ],
    Kafka: ["Have helped to develop event streaming NLP pipelines in Adarga."],
    Pulsar: [
	"Have used Pulsar in projects. Really impressed with its tiered storage, and Presto engine baked in, making error logging patterns through topics really easy to implement. Keen to work further with the technology.",
    ],
    Neo4j: [
	"Neo4j has been the main Graph database in Adarga and tinkering in spare time. Fairly confident in Cypher query language and the Neo ecosystem.",
    ],
    Elastic: [
	"Have experience in using ElasticSearch as a document store for text search.",
    ],
};
