# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## API endpoints

### Get financial report

endpoint: `/api/report`

method: `GET`

params:

- months

> type: number

> description: number of months to generate report for

sample response:

```json

[
  {
    "month": "2023-05",
    "data": {
      "bank": [
        {
          "id": "2ab2744a-694f-40a5-b6ab-3970ba8dedd2",
          "category": "bank",
          "value": 2249.04,
          "date": "2023-05-31T02:59:21.917Z",
          "title": "empathize indeed eclipse"
        },
        {
          "id": "890bde64-1ee6-47a6-ae3b-c19db7723d55",
          "category": "bank",
          "value": 5816.51,
          "date": "2023-05-01T20:22:03.504Z",
          "title": "ferociously reveal upside-down"
        }
      ],
      "income": [
        {
          "id": "c6f8719c-e4a9-4d1f-9cea-40bb26dbb5b0",
          "category": "income",
          "value": 2869.93,
          "date": "2023-05-13T14:50:32.677Z",
          "title": "neighbourhood throughout trundle"
        },
        {
          "id": "6e97963d-9a64-4ecb-8aa8-064834957e55",
          "category": "income",
          "value": 251.22,
          "date": "2023-05-14T15:19:18.035Z",
          "title": "lip that judgementally"
        },
        {
          "id": "e807ecc6-e85c-4399-b8e3-62b3bfd23ca9",
          "category": "income",
          "value": 2241.88,
          "date": "2023-05-02T07:44:37.081Z",
          "title": "sail alongside"
        }
      ],
      "cogs": [
        {
          "id": "0dc3eb1e-ffc7-4e5a-b099-c6c76e5e8a76",
          "category": "cogs",
          "date": "2023-05-08T23:32:10.188Z",
          "title": "deprecate valid apropos"
        },
        {
          "id": "f22a9ba8-e8c3-4e68-8853-c67b6263863b",
          "category": "cogs",
          "value": 741.44,
          "date": "2023-05-15T04:14:26.670Z",
          "title": "but highland"
        }
      ],
      "expense": [
        {
          "id": "ee5d7109-ba55-4f6a-9fa1-821fe8e9d6ec",
          "category": "expense",
          "date": "2023-05-13T05:14:45.612Z",
          "title": "Bank Charge & Fees",
          "transactions": []
        },
        {
          "id": "4bc1ef47-53cb-4bf5-9230-40edcbf79f28",
          "category": "expense",
          "value": 368.76,
          "date": "2023-05-20T23:18:31.185Z",
          "title": "Legal Services",
          "transactions": [
            {
              "id": "c5fdeae8-1f38-4b8f-b3e0-a474ae28c4fa",
              "date": "2023-05-10T09:46:33.929Z",
              "title": "crewmate",
              "description": "dearly attractive",
              "value": 217.91
            },
            {
              "id": "8c5b6620-fe99-4557-85e5-5edca7cb5141",
              "date": "2023-05-05T01:28:57.552Z",
              "title": "diversity",
              "description": "quicker woot",
              "value": 150.85
            }
          ]
        },
        {
          "id": "8dad78f7-231a-4f31-aca1-3b90733da719",
          "category": "expense",
          "date": "2023-05-16T00:33:20.230Z",
          "title": "Taxes & Licenses",
          "transactions": []
        },
        {
          "id": "6b22f41e-24f0-46e4-849a-f0c65149aed2",
          "category": "expense",
          "value": 538.61,
          "date": "2023-05-29T04:22:58.136Z",
          "title": "Office Supplies & Software",
          "transactions": [
            {
              "id": "be47ef59-7700-4c43-82c5-198c9a0bed73",
              "date": "2023-05-15T04:51:49.192Z",
              "title": "pumpkinseed",
              "description": "honestly incidentally",
              "value": 168.26
            },
            {
              "id": "f2012898-4023-4f56-a935-aa2f815f4f56",
              "date": "2023-05-20T18:04:47.769Z",
              "title": "shoestring",
              "description": "gadzooks though",
              "value": 13.7
            },
            {
              "id": "5202803d-d275-4270-b2f0-5193e221e7a6",
              "date": "2023-05-16T22:21:17.318Z",
              "title": "monotheism",
              "description": "blissfully assured",
              "value": 233.38
            },
            {
              "id": "cf53ef7c-f548-4f52-b9d5-d07ceca6d1e3",
              "date": "2023-05-17T10:32:45.686Z",
              "title": "brunch",
              "description": "same mid",
              "value": 123.27
            }
          ]
        }
      ]
    }
  },
  {
    "month": "2023-06",
    "data": {
      "bank": [
        {
          "id": "9e260a6e-069a-4aa5-b8c7-1a2996e22b5d",
          "category": "bank",
          "value": 4445.72,
          "date": "2023-06-18T15:47:59.859Z",
          "title": "empathize indeed eclipse"
        },
        {
          "id": "c3724667-ec3b-452a-8fce-8bec34cf84eb",
          "category": "bank",
          "value": 1597.44,
          "date": "2023-06-04T03:48:29.949Z",
          "title": "ferociously reveal upside-down"
        }
      ],
      "income": [
        {
          "id": "005e439b-4335-4b51-a035-762100502065",
          "category": "income",
          "value": 1879.93,
          "date": "2023-06-28T11:19:13.822Z",
          "title": "neighbourhood throughout trundle"
        },
        {
          "id": "3d144183-c7d6-4990-9f95-60f7a87c806a",
          "category": "income",
          "value": 2402.59,
          "date": "2023-06-14T03:34:07.673Z",
          "title": "lip that judgementally"
        },
        {
          "id": "bf7db2d9-85f3-4f90-9adf-7528e67ee7eb",
          "category": "income",
          "value": 484.13,
          "date": "2023-06-06T02:19:56.811Z",
          "title": "sail alongside"
        }
      ],
      "cogs": [
        {
          "id": "bb3915fb-b339-4b98-bacb-953f21d8a4fa",
          "category": "cogs",
          "value": 918.86,
          "date": "2023-06-06T22:38:14.499Z",
          "title": "deprecate valid apropos"
        },
        {
          "id": "6cacfcb4-31b8-4897-815f-2ddb7969bc8b",
          "category": "cogs",
          "value": 153.75,
          "date": "2023-06-25T22:30:59.801Z",
          "title": "but highland"
        }
      ],
      "expense": [
        {
          "id": "5d1b8997-e8da-4baa-8368-a260a1611386",
          "category": "expense",
          "value": 487.25,
          "date": "2023-06-05T15:05:03.283Z",
          "title": "Bank Charge & Fees",
          "transactions": [
            {
              "id": "3765e19e-9446-4ac5-8ef4-fe8ca98a9e18",
              "date": "2023-06-13T22:29:36.064Z",
              "title": "instinct",
              "description": "especially briefly",
              "value": 214.98
            },
            {
              "id": "e24be912-ca4e-4b25-a7cd-85807da39072",
              "date": "2023-06-12T06:00:05.221Z",
              "title": "faucet",
              "description": "giddy likewise",
              "value": 131.77
            },
            {
              "id": "ecc6d32c-76df-43ad-935c-863fb64393ec",
              "date": "2023-06-05T00:34:28.524Z",
              "title": "litigation",
              "description": "circa painfully",
              "value": 91.56
            },
            {
              "id": "65cf9d50-06da-427c-94f5-7eff507c8688",
              "date": "2023-06-23T13:11:19.189Z",
              "title": "brushing",
              "description": "utilized geez",
              "value": 48.94
            }
          ]
        },
        {
          "id": "40ac7d86-0e9c-491f-b749-a1b775515702",
          "category": "expense",
          "value": 528.64,
          "date": "2023-06-14T11:21:46.514Z",
          "title": "Legal Services",
          "transactions": [
            {
              "id": "2118c87c-6396-4795-93c2-21ec235b6f0d",
              "date": "2023-06-01T13:36:49.814Z",
              "title": "stot",
              "description": "whenever grubby",
              "value": 178.07
            },
            {
              "id": "245d98d0-b077-4a26-9d6b-23eda02c6b3b",
              "date": "2023-06-08T10:56:51.211Z",
              "title": "supplier",
              "description": "ouch past",
              "value": 201.18
            },
            {
              "id": "3891e49a-5c41-467b-81ce-fab2d8f401b4",
              "date": "2023-06-25T20:24:54.475Z",
              "title": "gland",
              "description": "gleefully at",
              "value": 149.39
            }
          ]
        },
        {
          "id": "1e51d725-7173-42c3-bf53-0147b2259788",
          "category": "expense",
          "value": 276.03,
          "date": "2023-06-01T18:52:09.812Z",
          "title": "Taxes & Licenses",
          "transactions": [
            {
              "id": "e32b9f1b-c1c5-4886-9e3a-b4b90eecac49",
              "date": "2023-06-09T08:44:36.521Z",
              "title": "shark",
              "description": "pace plus",
              "value": 32.14
            },
            {
              "id": "ab251e97-5f1a-44d6-9fe9-e15f79ffa2f0",
              "date": "2023-06-02T01:56:55.665Z",
              "title": "reserve",
              "description": "green currant",
              "value": 243.89
            }
          ]
        },
        {
          "id": "edae5902-3839-486e-914d-f83423b4bc28",
          "category": "expense",
          "value": 203.75,
          "date": "2023-06-18T11:07:07.035Z",
          "title": "Office Supplies & Software",
          "transactions": [
            {
              "id": "c29c97ea-908f-4216-918f-5539753d060f",
              "date": "2023-06-12T03:02:42.568Z",
              "title": "skean",
              "description": "instead mid",
              "value": 36.5
            },
            {
              "id": "91f5c603-991c-42ac-aba5-405b50f3d315",
              "date": "2023-06-27T15:35:22.811Z",
              "title": "paintwork",
              "description": "repeatedly washer",
              "value": 167.25
            }
          ]
        }
      ]
    }
  }
]

```

### Update transaction type

endpoint: `/api/transaction/{transaction_id}/update-type`

method: `POST`

body:

- type

> type: string

> description: new type for transaction

sample response:

```json

{
  "success": true
}

```
