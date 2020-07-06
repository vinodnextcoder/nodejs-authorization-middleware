 const constants= {
    routes: {
        include: [],
        exclude: ['*']
    },
    
    query: {
        pagination: {
            name: 'pagination',
            default: true
        },
        limit: {
            name: 'limit',
            default: 10
        },
        page: {
            name: 'page',
            default: 1
        }
    },
    meta: {
        limit: {
            active: true
        },
        page: {
            active: true
        },
        pageCount: {
            active: false
        },
        totalCount: {
            active: true
        },
        previous: {
            active: false
        },
        next: {
            active: false
        },
        last: {
            active: false
        },
        first: {
            active: false
        },
        self: {
            active: false
        },
        count: {
            active: false
        }
    },
  cabData : [
        {
            name: "SUV",
            start_location: "pune",
            end_location: "Mumbai",
            location_distance:250,
            status: "ACTIVE"
        },
        {
            name: "BMW",
            start_location: "Mumbai",
            end_location: "Pune",
            location_distance: 250,
            status: "ACTIVE"
        },
        {
            name: "BMW New",
            start_location: "Singhgad ROad",
            end_location: "Shivaji nagar",
            location_distance: 10,
            status: "ACTIVE"
        },
        {
            name: "Swift",
            start_location: "Singhgad ROad",
            end_location: "hadpasar",
            location_distance: 4,
            status: "ACTIVE"
        }

    ],
    userData : [
        {
    
            name: "Ravi Jadhav",
            desc: "node",
            status: "ACTIVE",
        
        },
        {
            name: "Nitin Patil",
            desc: "CPA",
            status: "ACTIVE"
        }
    ]
};

module.exports = constants;