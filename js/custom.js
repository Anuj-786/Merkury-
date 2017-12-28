$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
    	header: {
    		left: 'title',
    		right: 'month,agendaWeek,agendaDay',
    		firstDay: "Monday"
    	},  
    	events: [
    		{
		        "title": "Calendar Test01",
		        "start": "2017-12-06 18:30:00",
		        // "end": "2017-11-01 19:00:00",
		        "allDay": false
		    },
		    {
		        "title": "Calendar Test0",
		        "start": "2017-12-07 18:30:00",
		        // "end": "2017-11-01 19:00:00",
		        "allDay": false
		    },
		    {
		        "title": "New year Celb.",
		        "start": "2017-12-31 18:30:00",
		        // "end": "2014-06-02 19:00:00",
		        "allDay": false
		    },
		    {
		        "title": "Calendar Test 2",
		        "start": "2017-12-10 18:30:00",
		        // "end": "2014-06-03 19:00:00",
		        "allDay": false
		    }
    	]      

    })

});