export const experience = [
    { year: 2019, institution: "Adarga", role: "Software Engineer" },
    { year: 2018, institution: "UCL", role: "Msc Computer Science" },
    { year: 2017, institution: "Little Dot Studios", role: "Data Analyst" },
    { year: 2013, institution: "University of Edinburgh", role: "MA Economics & Politics" }];

export const experienceDetail = {
    Adarga: ["Currently Working as a Software Engineer at Adarga. Have worked maintaining the data ingestion pipeline, and its NLP microservices."],
    UCL: ["Completed my Masters in Computer Science at University College London"],
    "Little Dot Studios": ["Was an insight analyst for a year"],
    "University of Edinburgh": ["Undergraduate in UoE.", "Theoretical model about Online education for my dissertation in Python.", "learned various forms of econometric analysis."]
};


export const skills = { Devops: ["CircleCI", "Kubernetes", "AWS", "Terraform"], Languages: ["Python", "Golang", "Js/Ts", "Java"], Data: ["Kafka", "Pulsar", "Neo4j", "Elastic"] };

export const skillsDetail = {

    CircleCI: ["Have used CircleCI as the main Continuous Integration tool. Experience involves setting up CI jobs through manifests, and pushing to container registries"],
    Kubernetes: ["Have been using Kubernetes as the main orchestration tool to maintain event streaming pipelines.", "Have some experience of using ArgoCD to practice Continuous deployment in the cloud."],
    AWS: ["Intermediate  skills in AWS. Familiar with S3, elastic IP, and have provisioned resources through terraform", "Will be looking to get certified in this year."],
    Terraform: ["Have started provisioning infrastructure through Terraform.", "Very into the composable infrastructure as code philosophy and have seen setup time for provisioning reduced greatly", "At Adarga, have been accustomed to managing Bitbucket repositories through Terraform."],
    Python: ["Have been using Python for a number of years.", "Familiar with most of its data science libraries, and is tool of choice for most data analyis.", "Have raised FAAS services for NLP models in Python so am familiar with its API/Microservice libraries.", "Extensive experience with Spacy."],
    Golang: ["Recently picked up Golang. Have created GraphQL servers for backend infrastructure in Adarga.", "Using Golang in my personal projects. Really enjoying the design and simplicity of the language."],
    "Js/Ts": ["Have used Javascript for React apps and visualisations. Have worked on node services at Adarga, and am familiar with ES6 syntax. Created a React dashboard for an industry project at UCL.", "React experience includes Tailwind, which I am currently learning, and was used in this app. Am familiar with libraries such as Redux and Router."],
    "Java": ["Have used Java to create scrapers, and professionally to develop components in event pipelines.", "However, using Java less and less as other languages have taken over its space."],
    "Kafka": ["Have helped to develop event streaming NLP pipelines in Adarga"],
    Pulsar: ["Have used Pulsar in projects. Really impressed with its tiered storage, and Presto engine baked in, making error logging patterns through topics really easy to implement. Keen to work further with the technology."],
    Neo4j: ["Neo4j has been the main Graph database in Adarga and tinkering in spare time. Fairly confident in Cypher query language and the Neo ecosystem."],
    Elastic: ["Have experience in using ElasticSearch as a document store for text search."]

};
