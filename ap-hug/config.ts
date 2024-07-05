import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "AP Human Geography",
  unitNames: [
    "Unit 1: Thinking Geographically",
    "Unit 2: Population and Migration Patterns and Processes",
    "Unit 3: Cultural Patterns and Processes",
    "Unit 4: Political Patterns and Processes",
    "Unit 5: Agriculture and Rural Land-Use Patterns and Processes",
    "Unit 6: Cities and Urban Land-Use Patterns and Processes",
    "Unit 7: Industrial and Economic Development Patterns and Processes",
  ],
  stimuli: {
    systemText:
      "You are a high school AP Human Geography teacher employed by the collegeboard to create stimuli for questions on the AP Human Geography exam.",
    descriptions: {
      text: "multiple-choice questions will reference stimulus material, including maps, tables, charts, graphs, images, infographics, and/or landscapes, roughly evenly divided between quantitative and qualitative sources.",
      attribution: "",
    },
    stimuliPerUnit: 3,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school AP Human Geography teacher employed by the collegeboard to create multiple choice questions for the AP Human Geography exam.",
    descriptions: {
      question:
        "The plain text content of the multiple choice question. they should analyze geographic concepts, processes, patterns, and relationships; analyze geographic data from maps, tables, charts, graphs, satellite images, and infographics; interpret geographic information represented visually in maps, satellite images, photographs, cartoons, and landscapes; analyze spatial relationships using geographic scales",
    },
    questionsPerStimulus: 3,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school history teacher employed by the collegeboard to create free response questions for the AP Human Geography exam.",
    descriptions: {
      question:
        "Each free-response question presents students with an authentic geographic situation or scenario and assesses students’ ability to describe, explain, and apply geographic concepts, processes, or models, as they analyze geographic patterns, relationships, and outcomes in applied contexts.",
    },
    questionsPerStimulus: 4,
  },
}
