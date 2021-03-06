# TASQ

## Project Description

Tasq is a react based front end application allowing users to create and manage to do lists.

[TASQ](https://tasq.netlify.app/)

## API and Data Sample

To do list items are stored in an airtable api which returns data as follows:

``` javascript
{
    "records": [
        {
            "id": "recoQBzXZKoJwYm0q",
            "fields": {
                "title": "Grocery List",
                "item": [
                    "rectxSikQZXMKwO7U",
                    "recTzyfxETyHoVI0h",
                    "recVbb64DR0Oo3gfi"
                ],
                "item (from item)": [
                    "eggs",
                    "coffee",
                    "bacon"
                ]
            },
            "createdTime": "2021-09-17T13:56:01.000Z"
        },
        {
            "id": "recGdLzH1Rh6dE4bF",
            "fields": {
                "title": "To Do List",
                "item": [
                    "recUNBIAOIlTZLWau",
                    "recXcfw6sN6tYNNpW",
                    "recr61LnfTZd9LvvP",
                    "recISPvg6aZP1Wmne"
                ],
                "item (from item)": [
                    "grocery shopping",
                    "vacuum",
                    "clean bathroom",
                    "do homework"
                ]
            },
            "createdTime": "2021-09-17T13:56:01.000Z"
        },
        {
            "id": "rec79LtYlrumSdzPk",
            "fields": {},
            "createdTime": "2021-09-17T13:56:01.000Z"
        }
    ],
    "offset": "rec79LtYlrumSdzPk"
}
```

## Wireframes
![Home Mobile](https://github.com/ktbg/tasq/blob/main/Images/home_mobile.png) 
![List Details Mobile](https://github.com/ktbg/tasq/blob/main/Images/listDetail_mobile.png) 
![New List Mobile](https://github.com/ktbg/tasq/blob/main/Images/listEdit_mobile.png)
![Home Desktop](https://github.com/ktbg/tasq/blob/main/Images/home_desktop.png)
![List Details Desktop](https://github.com/ktbg/tasq/blob/main/Images/listDetails_desktop.png)
![New List Desktop](https://github.com/ktbg/tasq/blob/main/Images/listEdit_desktop.png)


## Component Hierarchy

![Component Hierarchy](https://github.com/ktbg/tasq/blob/main/Images/Tasq_componentHierarchy.png)

### MVP/PostMVP

#### MVP 

- Home page loads button to access current list via an axios request to airtable
- Home page has access to create a new list
- Create page has form to enter list title and items and button to create new list
- New list data sent to airtable via axios post request
- New lists rendered on home page via axios reqeust to airtable

#### PostMVP  

- Delete full lists
- Delete list items
- Mark list items as done
- Progress chart for completed list items
- Edit list items
- Toggle hide checked items

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 16| Wireframe creation and approval | Complete
|Sept 17| Component hierarchy map and approval | Complete
|Sept 17-19| README, file set up, deploy set up, endpoint testing  | Complete
|Sept 20| README approval, MVP functional logic  | Complete
|Sept 21| CSS | Complete
|Sept 22| CSS / postMVP| Complete
|Sept 23| CSS/ postMVP | Complete
|Sept 24| Presentations | Complete

## Priority Matrix

![Priority Matrix](https://github.com/ktbg/tasq/blob/main/Images/p2_priorityMatrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create react app and install dependencies | H | 1 hr| 10 min |  |
| Remove react boilerplate css and rough style app body | H | 1 hrs| 10 min |  |
| Test routes| H | 1 hrs| 30 min | |
| Test API end point get request | H | 2 hrs| 1 hr | |
| Test API end point post request | H | 3 hrs| 2 hrs |  |
| App logic to return list titles to home page | H | 2 hrs| 1 hr |  |
| App logic to return list items to list page | H | 4 hrs| 3 hrs |  |
| App logic to create new list | H | 4 hrs| 4 hrs |  |
| CSS styling for MVP mobile and desktop| H | 12 hrs| 12 hrs |  |
| Post MVP - App logic to delete full list and list items | H | 3 hrs | 4 hrs |  |
| Post MVP - App logic to mark list items as done | H | 3 hrs| 10 hrs |  |
| Post MVP - Progress chart animation for completed list items | M | 3 hr | 1 hr |  |
| Post MVP - App logic to edit list items | L | 5 hr| 10 hr |  |
| Post MVP - CSS styling edit page and desktop view | L | 6 hr | 2 hrs| |
| Total |  | 50 hrs| 49.67 hrs |  |

## Dependencies

- [create-react-app](https://create-react-app.dev/) 
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [axios](https://www.npmjs.com/package/axios)
- [tailwindcss](https://tailwindcss.com/docs/guides/create-react-app)
- [react-media](https://github.com/ReactTraining/react-media)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)


