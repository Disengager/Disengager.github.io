// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "phi_stroop",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "phi_stroop",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "100"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -25,
                "angle": 0,
                "width": 305.95,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${ parameters.color1 }",
                "text": "${ parameters.word1}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "${ parameters.interval }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 25,
                "top": -25,
                "angle": 0,
                "width": 305.95,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${ parameters.color2 }",
                "text": "${ parameters.word2}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "${ parameters.interval }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "100"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "red",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 20
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "100"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -25,
                "angle": 0,
                "width": 305.95,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${ parameters.color1 }",
                "text": "${ parameters.word1}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "${ parameters.interval }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 25,
                "top": -25,
                "angle": 0,
                "width": 305.95,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${ parameters.color2 }",
                "text": "${ parameters.word2}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "${ parameters.interval }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "100"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "timeout": "2000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        },
        {
          "word1": "красный",
          "word2": "красный",
          "color1": "red",
          "color2": "blue",
          "interval": 10
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "50"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -25,
                "angle": 0,
                "width": 12.45,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${ parameters.color1 }",
                "text": "*",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "${ parameters.interval }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 25,
                "top": -25,
                "angle": 0,
                "width": 12.45,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${ parameters.color2 }",
                "text": "*",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "${ parameters.interval }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "100"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()