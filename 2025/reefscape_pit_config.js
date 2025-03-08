var config_data = `
{
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape",
  "pitConfig": "true",
  "prematch": [
    {
      "name": "Scouter Initials",
      "code": "si",
      "type": "text"
    },
    {
      "name": "Team #",
      "code": "t",
      "type": "number"
    },
    {
      "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    {
      "name": "Length",
      "code": "le",
      "type": "number",
      "defaultValue": "0"
    },
    {
      "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    {
      "name": "Swerve Ratio",
      "code": "sr",
      "type": "text"
    },
    {
      "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    {
      "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    {
      "name": "April tag alignment?",
      "code": "apr",
      "type": "bool"
    },

    {
      "name": "Can score L1: ",
      "code": "csa",
      "type": "bool"
    },

    {
      "name": "Can score L2: ",
      "code": "csb",
      "type": "bool"
    },

    {
      "name": "Can score L3: ",
      "code": "csc",
      "type": "bool"
    },

    {
      "name": "Can score L4: ",
      "code": "csd",
      "type": "bool"
    },

    {
      "name": "Can score barge:  ",
      "code": "cse",
      "type": "bool"
    },

    {
      "name": "Can score processor: ",
      "code": "csf",
      "type": "bool"
    },
    

    
    {
      "name": "# of Auto Coral",
      "code": "auc",
      "type": "counter"
    },
    {
      "name": "# of Auto Algae",
      "code": "aua",
      "type": "counter"
    },
    {
      "name": "Autos Descriptions",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    {
      "name": "Extra Info",
      "code": "ei",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    {
      "name": "Comments",
      "code": "c",
      "type": "text",
      "size": 20,
      "maxSize": 300
    }
  ],
  "auton": [],
  "teleop": [],
  "endgame": [],
  "postmatch": []
}
`;
//documentation 
