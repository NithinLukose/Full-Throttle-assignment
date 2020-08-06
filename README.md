
# to install dependencies
npm install

# Run on http://localhost:3000
npm start

# Build for prod
npm run build

##### dependencies

# redux
npm install redux

# react-redux
npm install react-redux

# redux-thunk
npm install redux-thunk

# Material UI
npm install @material-ui/core

# React-DateRange-Picker
npm install @wojtekmaj/react-daterange-picker

# json server to mock API http://localhost:3001
npm install -g json-server
npm run server

### About Application

# react application which fetches user list from API which is stored in state handled with redux. User list is paginated each page will show 4 user  details (user name,area and last active detail). Modal appears when a particular user is clicked. Modal contains user's activity records. Modal provides the functionality to select date range which filters if the user  was active during that period.
