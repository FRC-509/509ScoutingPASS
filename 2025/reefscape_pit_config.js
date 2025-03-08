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
      "type": "bool",
      
    },

    {
      "name": "Can score L2: ",
      "code": "csb",
      "type": "bool",
      
    },

    {
      "name": "Can score L3: ",
      "code": "csc",
      "type": "bool",
      
    },


  {
      "name": "Can score L4: ",
      "code": "csd",
      "type": "bool",
      
    },

    {
      "name": "Can score barge: ",
      "code": "cse",
      "type": "bool",
      
    },

    {
      "name": "Can score processor: ",
      "code": "csf",
      "type": "bool",
      
    },
    {
      "name": "Can score: ",
      "code": "csb",
      "type": "radio",
      "choices": {
        "b": "L2<br>",
        "ab": "Can not<br>"
      }
    },
    {
      "name": "Can score: ",
      "code": "csc",
      "type": "radio",
      "choices": {
        "c": "L3<br>",
        "ac": "Can not<br>"
      }
    },
    {
      "name": "Can score: ",
      "code": "csd",
      "type": "radio",
      "choices": {
        "d": "L4<br>",
        "ad": "Can not<br>"
      }
    },
    {
      "name": "Can score: ",
      "code": "cse",
      "type": "radio",
      "choices": {
        "e": "Barge (from ground)<br>",
        "ae": "Can not<br>"
      }
    },
    {
      "name": "Can score: ",
      "code": "csf",
      "type": "radio",
      "choices": {
        "f": "Processor<br>",
        "af": "Can not<br>"
      }
    },
    {
      "name": "Can climb: ",
      "code": "cli",
      "type": "radio",
      "choices": {
        "n": "Deep Cage<br>",
        "f": "Shallow<br>",
        "c": "Both<br>",
        "b": "Neither<br>",
        "k": "Not Scouted"
      },
      "defaultValue": "k"
    },
    {
      "name": "Can Pick Up: ",
      "code": "cpc",
      "type": "radio",
      "choices": {
        "f": "Floor Coral<br>",
        "af": "Can not<br>"
      }
    },
    {
      "name": "Can Pick Up: ",
      "code": "cph",
      "type": "radio",
      "choices": {
        "f": "Human Player Coral<br>",
        "af": "Can not<br>"
      }
    },
    {
      "name": "Can Pick Up: ",
      "code": "cpr",
      "type": "radio",
      "choices": {
        "f": "Reef Algae<br>",
        "af": "Can not<br>"
      }
    },
    {
      "name": "Can Pick Up: ",
      "code": "cpa",
      "type": "radio",
      "choices": {
        "f": "Floor Algae<br>",
        "af": "Can not<br>"
      }
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
