var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025week0",
      "required": "false"
    },
    { "name": "Match Level",
      "code": "ml",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Starting Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Auto Coral Scored",
      "code": "acs",
      "type": "counter"
    },
    { "name": "Auto Algae Scored",
      "code": "aas",
      "type": "counter"
    },
      { "name": "Knock Lolipops Over",
      "code": "akl",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Coral Scored",
      "code": "tc",
      "type": "counter"
    },
    { "name": "Processor Algae Scored",
      "code": "tpa",
      "type": "counter"
    },
    { "name": "Barge Algae Scored",
      "code": "tba",
      "type": "counter"
    },
    {
      "name": "Defense?",
      "code": "d",
      "type": "bool"
    },
    {
      "name": "Co-op",
      "code": "co",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Human<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Climb Timer",
      "code": "ct",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "cd": "Climbed Deep Cage<br>",
        "cs": "Climbed Shallow Cage<br>",
        "c": "Continue Scoring<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "spr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Coral/Algae (>2)",
      "code": "dca",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "com",
      "type": "text",
      "size": 15,
      "maxSize": 99999
    }
  ]
}`;
