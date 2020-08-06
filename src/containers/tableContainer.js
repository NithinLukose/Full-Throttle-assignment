import {connect} from 'react-redux'
import Table from '../components/Table'


//Table container component


//function to convert string to date
const convertDate = (date) => {
    let dateTime = date.split(" ");
    dateTime = dateTime.filter(date=>date!=="")
    let time = dateTime[dateTime.length-1]
    let [hours,minutes] = time.split(":")
    if(hours === '12'){
        hours = "00"
    }
    if(minutes.indexOf("PM")>=0){
        hours = parseInt(hours, 10) + 12;
        minutes = minutes.slice(0,minutes.indexOf("PM"))
    }
    else{
        minutes = minutes.slice(0,minutes.indexOf("AM"))
    }

    time = `${hours}:${minutes}`
    dateTime[dateTime.length-1] = time
    date = ''
    for(let i = 0;i<dateTime.length;i++){
        date += dateTime[i] + " "
    }
    return new Date(date)
}



const mapStateToProps = (state) => {

    let activity_periods = state.user.user.activity_periods.map(period=>{
        let sd = convertDate(period.start_time)
        let ed = convertDate(period.end_time)
        return{
            start_time:sd,
            end_time:ed
        }
    })
    let startDate = state.user.startDate
    let endDate = state.user.endDate
    //console.log(activity_periods)
    if(startDate&&endDate){
        activity_periods = activity_periods.filter(period=>{
            let sd = period.start_time
            let ed = period.end_time
            
            if(startDate <= sd&&endDate >= ed){
                return period
            }
            else{
                return null
            }
        })
    }
    

    //console.log(activity_periods)
    return{
        activity_periods,
    }

}

export default connect(mapStateToProps)(Table)